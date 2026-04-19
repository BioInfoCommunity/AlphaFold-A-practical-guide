import os
import re
import sys

ROOT = os.getcwd()

# -----------------------------
# Config
# -----------------------------
PROTECTED_PATHS = [
    "_config.yml",
    "_data",
    "_layouts",
    "scripts",
    "README.md",
    "CODEOWNERS",
]

IGNORE_DIRS = {
    ".git",
    ".github",
    "_data",
    "_layouts",
    "scripts",
    "node_modules",
}

IGNORE_FILES = {
    "_config.yml",
    "README.md",
    "CODEOWNERS",
    "changed_files.txt",
}

ALLOWED_EXTENSIONS = {".md", ".jpg", ".jpeg", ".png"}

errors = []
warnings = []

# -----------------------------
# Helpers
# -----------------------------
def read_changed_files():
    try:
        with open("changed_files.txt", "r", encoding="utf-8") as f:
            ## return [line.strip() for line in f if line.strip().endswith(".md")]
            return [line.strip() for line in f if line.strip()]
    except FileNotFoundError:
        return []


def is_english_name(name):
    return re.match(r"^[a-z0-9\-_.]+$", name, re.IGNORECASE)


# -----------------------------
# Checks
# -----------------------------
def check_file_name(file_path):
    name = os.path.basename(file_path)

    if name == "index.md":
        return

    base = os.path.splitext(name)[0]

    if not (
        re.match(r"^\d{3}-[a-z0-9-]+$", base)
        or re.match(r"^\d+\.[a-z0-9-]+$", base)
    ):
        errors.append(f"❌ Invalid file name: {file_path}")


def check_frontmatter(file_path, content):
    name = os.path.basename(file_path)

    if name == "README.md":
        return

    if not content.startswith("---"):
        errors.append(f"❌ Missing frontmatter in {file_path}")
        return

    parts = content.split("---")

    if len(parts) < 3:
        errors.append(f"❌ Invalid frontmatter format in {file_path}")
        return

    frontmatter = parts[1]

    if "layout: default" not in frontmatter:
        errors.append(f'❌ Missing "layout: default" in {file_path}')

    title_match = re.search(r"title:\s*(.+)", frontmatter)

    if not title_match:
        errors.append(f'❌ Missing "title" in {file_path}')
    elif not title_match.group(1).strip():
        errors.append(f'❌ Empty "title" in {file_path}')


def check_links_and_images(file_path, content):
    dir_path = os.path.dirname(file_path)

    for match in re.finditer(r"\[.*?\]\((.*?)\)", content):
        link = match.group(1)

        if link.startswith("./") or link.startswith("../"):
            target = os.path.abspath(os.path.join(dir_path, link))
            if not os.path.exists(target):
                errors.append(f"❌ Broken link in {file_path} → {link}")

    for match in re.finditer(r"!\[.*?\]\((.*?)\)", content):
        img = match.group(1)

        if not img.startswith("http"):
            img_path = os.path.abspath(os.path.join(dir_path, img))
            if not os.path.exists(img_path):
                errors.append(f"❌ Missing image in {file_path} → {img}")


def check_protected_files():
    try:
        with open("changed_files.txt", "r", encoding="utf-8") as f:
            changed = [line.strip() for line in f if line.strip()]

        for file in changed:
            for protected in PROTECTED_PATHS:
                if file.startswith(protected):
                    errors.append(f"❌ Protected file modified: {file}")

    except FileNotFoundError:
        warnings.append("⚠️ Could not verify protected files")


def run_checks(file_path, content):
    check_file_name(file_path)
    check_frontmatter(file_path, content)
    check_links_and_images(file_path, content)


# -----------------------------
# Report builder (KEY FIX: LINT_REPORT support)
# -----------------------------
def build_report():
    lines = []
    lines.append("## 🤖 Lint Report\n")

    if errors:
        lines.append("### ❌ Errors")
        lines.extend(errors)

    if warnings:
        lines.append("\n### ⚠️ Warnings")
        lines.extend(warnings)

    if not errors and not warnings:
        lines.append("✅ All checks passed!")

    return "\n".join(lines)


def write_outputs(report):
    # Always write file (useful locally + CI artifact style)
    with open("report.txt", "w", encoding="utf-8") as f:
        f.write(report)

    # Export to GitHub Actions env (THIS is your LINT_REPORT fix)
    github_env = os.environ.get("GITHUB_ENV")
    if github_env:
        with open(github_env, "a", encoding="utf-8") as f:
            f.write(f"LINT_REPORT<<EOF\n{report}\nEOF\n")


# -----------------------------
# Main
# -----------------------------
def main():
    changed_files = read_changed_files()

    if not changed_files:
        print("No markdown files to validate.")
        return 0

    # for file in changed_files:
    #     full_path = os.path.join(ROOT, file)

    #     if not os.path.exists(full_path):
    #         continue

    #     with open(full_path, "r", encoding="utf-8") as f:
    #         content = f.read()

    #     run_checks(full_path, content)

    for file in changed_files:
        full_path = os.path.join(ROOT, file)
        ext = os.path.splitext(file)[1].lower()

        # 1. Validate extension FIRST
        if ext not in ALLOWED_EXTENSIONS:
            errors.append(f"❌ Invalid file type: {file}")
            continue
    
        # 2. Markdown validation
        if ext == ".md":
            if os.path.exists(full_path):
                with open(full_path, "r", encoding="utf-8") as f:
                    content = f.read()
    
                run_checks(full_path, content)

        # 3. Image validation (future)
        elif ext in {".jpg", ".jpeg", ".png"}:
            pass

    check_protected_files()

    report = build_report()

    print(report)
    write_outputs(report)

    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())

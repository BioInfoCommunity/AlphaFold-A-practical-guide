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

errors = []
warnings = []

# -----------------------------
# Helpers
# -----------------------------
def is_markdown(file):
    return file.endswith(".md")


def is_english_name(name):
    return re.match(r"^[a-z0-9\-_.]+$", name, re.IGNORECASE)


def read_changed_files():
    try:
        with open("changed_files.txt", "r", encoding="utf-8") as f:
            return [line.strip() for line in f if line.strip().endswith(".md")]
    except FileNotFoundError:
        return []


# -----------------------------
# File name check
# -----------------------------
def check_file_name(file_path):
    name = os.path.basename(file_path)

    if name == "index.md":
        return

    base = os.path.splitext(name)[0]

    valid1 = re.match(r"^\d{3}-[a-z0-9-]+$", base)
    valid2 = re.match(r"^\d+\.[a-z0-9-]+$", base)

    if not (valid1 or valid2):
        errors.append(f"❌ Invalid file name: {file_path}")


# -----------------------------
# Frontmatter check (FIXED: no early blocking of other validations)
# -----------------------------
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

    # DO NOT stop after first issue — collect all
    if "layout: default" not in frontmatter:
        errors.append(f'❌ Missing "layout: default" in {file_path}')

    title_match = re.search(r"title:\s*(.+)", frontmatter)

    if not title_match:
        errors.append(f'❌ Missing "title" in {file_path}')
    elif not title_match.group(1).strip():
        errors.append(f'❌ Empty "title" in {file_path}')


# -----------------------------
# Link + image checks (already OK)
# -----------------------------
def check_links_and_images(file_path, content):
    dir_path = os.path.dirname(file_path)

    # Markdown links
    for match in re.finditer(r"\[.*?\]\((.*?)\)", content):
        link = match.group(1)

        if link.startswith("./") or link.startswith("../"):
            target = os.path.abspath(os.path.join(dir_path, link))
            if not os.path.exists(target):
                errors.append(f"❌ Broken link in {file_path} → {link}")

    # Images
    for match in re.finditer(r"!\[.*?\]\((.*?)\)", content):
        img = match.group(1)

        if not img.startswith("http"):
            img_path = os.path.abspath(os.path.join(dir_path, img))
            if not os.path.exists(img_path):
                errors.append(f"❌ Missing image in {file_path} → {img}")


# -----------------------------
# Protected file check
# -----------------------------
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


# -----------------------------
# Run all checks per file (KEY FIX)
# -----------------------------
def run_checks(file_path, content):
    check_file_name(file_path)
    check_frontmatter(file_path, content)
    check_links_and_images(file_path, content)


# -----------------------------
# Main execution
# -----------------------------
def main():
    changed_files = read_changed_files()

    if not changed_files:
        print("No markdown files to validate.")
        return 0

    for file in changed_files:
        full_path = os.path.join(ROOT, file)

        if not os.path.exists(full_path):
            continue

        with open(full_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Run ALL checks independently
        run_checks(full_path, content)

    check_protected_files()

    # -------------------------
    # Output
    # -------------------------
    print("\n## 🤖 Lint Report\n")

    if errors:
        print("### ❌ Errors")
        for e in errors:
            print(e)

    if warnings:
        print("\n### ⚠️ Warnings")
        for w in warnings:
            print(w)

    if not errors and not warnings:
        print("✅ All checks passed!")

    def write_report():
    with open("report.txt", "w", encoding="utf-8") as f:
        f.write("## 🤖 Lint Report\n\n")

        if errors:
            f.write("### ❌ Errors\n")
            for e in errors:
                f.write(e + "\n")

        if warnings:
            f.write("\n### ⚠️ Warnings\n")
            for w in warnings:
                f.write(w + "\n")

        if not errors and not warnings:
            f.write("✅ All checks passed!\n")
        write_report()

    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())

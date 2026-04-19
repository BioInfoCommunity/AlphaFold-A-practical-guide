import os
import sys
import yaml


REQUIRED_FIELDS = ["layout", "title"]


def extract_frontmatter(content):
    if not content.startswith("---"):
        return None, "Missing frontmatter block"

    parts = content.split("---", 2)
    if len(parts) < 3:
        return None, "Invalid frontmatter structure"

    _, fm, _ = parts

    try:
        data = yaml.safe_load(fm)
        return data, None
    except yaml.YAMLError as e:
        return None, f"Invalid YAML: {str(e)}"


def validate_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    fm, error = extract_frontmatter(content)

    if error:
        return [f"{filepath}: {error}"]

    errors = []

    if not isinstance(fm, dict):
        return [f"{filepath}: Frontmatter is not a valid YAML object"]

    for field in REQUIRED_FIELDS:
        if field not in fm:
            errors.append(f"{filepath}: Missing required field '{field}'")

    if "title" in fm and not fm["title"]:
        errors.append(f"{filepath}: Title cannot be empty")

    return errors


def get_changed_files():
    if not os.path.exists("changed_files.txt"):
        return []

    with open("changed_files.txt", "r") as f:
        return [line.strip() for line in f if line.strip().endswith(".md")]


def main():
    files = get_changed_files()

    if not files:
        print("No markdown files to validate.")
        return 0

    all_errors = []

    for file in files:
        if os.path.exists(file):
            all_errors.extend(validate_file(file))

    if all_errors:
        print("\n".join(all_errors))
        return 1

    print("Frontmatter validation passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

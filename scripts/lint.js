// scripts/lint.js

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();

// Config
const PROTECTED_PATHS = [
  "_config.yml",
  "_data",
  "_layouts",
  "scripts",
  "README.md",
  "CODEOWNERS"
];

const IGNORE_DIRS = [
  ".git",
  ".github",
  "_data",
  "_layouts",
  "scripts",
  "node_modules"
];

const IGNORE_FILES = [
  "_config.yml",
  "README.md",
  "CODEOWNERS",
  "changed_files.txt"
];

const FILE_NAME_REGEX = /^\d{3}-[a-z0-9-]+$/;

let errors = [];
let warnings = [];

// Helpers
function isMarkdown(file) {
  return file.endsWith(".md");
}

function isEnglishName(name) {
  return /^[a-z0-9\-_.]+$/i.test(name);
}

function checkFileName(filePath) {
  const name = path.basename(filePath);

  // Allow index.md everywhere
  if (name === "index.md") return;

  const base = path.basename(filePath, ".md");

  // Allow:
  // 010-xxx
  // 01.xxx (optional if you want)
  const validPattern1 = /^\d{3}-[a-z0-9-]+$/;
  const validPattern2 = /^\d+\.[a-z0-9-]+$/;

  if (!validPattern1.test(base) && !validPattern2.test(base)) {
    errors.push(`❌ Invalid file name: ${filePath}`);
  }
}

function shouldCheckIndex(dirPath) {
  return !IGNORE_DIRS.some(d => dirPath.includes(d));
}

function walk(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const relPath = path.relative(ROOT, fullPath);

    // Skip node_modules
    if (relPath.includes("node_modules")) continue;

    if (IGNORE_DIRS.some(dir => relPath.startsWith(dir))) {
      continue;
    }

    if (IGNORE_FILES.includes(file)) {
      continue;
    }

    const stat = fs.statSync(fullPath);

    // Check English names
    if (!isEnglishName(file)) {
      errors.push(`❌ Non-English file/folder name: ${relPath}`);
    }

    if (stat.isDirectory()) {
      walk(fullPath);
    
      if (shouldCheckIndex(relPath)) {
        const indexPath = path.join(fullPath, "index.md");
        if (!fs.existsSync(indexPath)) {
          warnings.push(`⚠️ Missing index.md in ${relPath}`);
        }
      }
    } else {
      if (!isMarkdown(file)) {
        // warnings.push(`⚠️ Non-markdown file detected: ${relPath}`);
        continue;
      } else {
        checkFileName(fullPath);

        const content = fs.readFileSync(fullPath, "utf-8");

        // Check broken relative links
        const linkRegex = /\[.*?\]\((.*?)\)/g;
        let match;

        while ((match = linkRegex.exec(content))) {
          const link = match[1];

          if (link.startsWith("./") || link.startsWith("../")) {
            const target = path.resolve(path.dirname(fullPath), link);
            if (!fs.existsSync(target)) {
              errors.push(`❌ Broken link in ${relPath} → ${link}`);
            }
          }
        }

        // Check images
        const imgRegex = /!\[.*?\]\((.*?)\)/g;
        while ((match = imgRegex.exec(content))) {
          const img = match[1];

          if (!img.startsWith("http")) {
            const imgPath = path.resolve(path.dirname(fullPath), img);
            if (!fs.existsSync(imgPath)) {
              errors.push(`❌ Missing image in ${relPath} → ${img}`);
            }
          }
        }
      }
    }
  }
}

// Protected files check (based on git diff if available)
function checkProtectedFiles() {
  try {
    const changedFiles = fs.readFileSync("changed_files.txt", "utf-8")
      .split("\n")
      .filter(Boolean);

    for (const file of changedFiles) {
      for (const protectedPath of PROTECTED_PATHS) {
        if (file.startsWith(protectedPath)) {
          errors.push(`❌ Protected file modified: ${file}`);
        }
      }
    }
  } catch {
    warnings.push("⚠️ Could not verify protected files");
  }
}

// Run
// walk(ROOT);
function getChangedFiles() {
  try {
    return fs.readFileSync("changed_files.txt", "utf-8")
      .split("\n")
      .filter(f => f.endsWith(".md"));
  } catch {
    return [];
  }
}

const changedFiles = getChangedFiles();

for (const file of changedFiles) {
  const fullPath = path.join(ROOT, file);

  if (fs.existsSync(fullPath)) {
    checkFileName(fullPath);

    const content = fs.readFileSync(fullPath, "utf-8");

    // run link + image checks here
  }
}
checkProtectedFiles();

// Output
console.log("\n## 🤖 Lint Report\n");

if (errors.length) {
  console.log("### ❌ Errors");
  errors.forEach(e => console.log(e));
}

if (warnings.length) {
  console.log("\n### ⚠️ Warnings");
  warnings.forEach(w => console.log(w));
}

if (!errors.length && !warnings.length) {
  console.log("✅ All checks passed!");
}

// Exit code
if (errors.length) {
  process.exit(1);
}

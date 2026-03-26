import fs from "fs";
import path from "path";

const CONTENT_DIR = ".";           // root of markdown files
const OUTPUT_FILE = "./_data/navigation.yml";

// array of languages
const LANGS = ["en", "es", "fr", "de", "pt"];

// helper to remove leading numbers
function stripNumber(name) {
  return name.replace(/^\d+-/, "");
}

// recursively get pages for a given folder
function getPages(dir, parentUrl = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => e.name.endsWith(".md") || e.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  const pages = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const folderName = stripNumber(entry.name);
      const folderUrl = `${parentUrl}/${folderName}`;
      const indexPath = path.join(entryPath, "index.md");

      const children = getPages(entryPath, folderUrl);

      if (fs.existsSync(indexPath)) {
        pages.push({
          title: folderName,
          url: folderUrl + "/",
          children: children.length > 0 ? children : undefined,
        });
      } else {
        pages.push(...children);
      }
    } else if (entry.name.endsWith(".md")) {
      if (entry.name.toLowerCase() === "readme.md" || entry.name.toLowerCase() === "index.md") continue;
      const fileName = stripNumber(entry.name.replace(".md", ""));
      pages.push({
        title: fileName,
        url: `${parentUrl}/${fileName}/`,
      });
    }
  }

  return pages;
}

// ensure _data folder exists
if (!fs.existsSync("./_data")) fs.mkdirSync("./_data");

// generate navigation for all languages
const navigation = {};

for (const lang of LANGS) {
  const langDir = path.join(CONTENT_DIR, lang);
  if (fs.existsSync(langDir)) {
    navigation[lang] = getPages(langDir, `/${lang}`);
  }
}

// write YAML
function toYAML(obj, indent = 0) {
  const spaces = " ".repeat(indent);
  let yaml = "";
  for (const key in obj) {
    const value = obj[key];
    if (Array.isArray(value)) {
      yaml += `${spaces}${key}:\n`;
      for (const item of value) {
        yaml += `${spaces}- title: "${item.title}"\n`;
        yaml += `${spaces}  url: "${item.url}"\n`;
        if (item.children) {
          yaml += `${spaces}  children:\n`;
          yaml += toYAML({ temp: item.children }, indent + 4).replace(/  temp:/g, "");
        }
      }
    } else if (typeof value === "object") {
      yaml += `${spaces}${key}:\n` + toYAML(value, indent + 2);
    } else {
      yaml += `${spaces}${key}: ${value}\n`;
    }
  }
  return yaml;
}

const yamlContent = toYAML(navigation);
fs.writeFileSync(OUTPUT_FILE, yamlContent);

console.log(`Navigation generated at ${OUTPUT_FILE}`);

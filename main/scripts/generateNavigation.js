import fs from "fs";
import path from "path";

const CONTENT_DIR = ".";           // root of markdown files
const OUTPUT_FILE = "./_data/navigation.yml";

// helper to remove leading numbers
function stripNumber(name) {
  return name.replace(/^\d+-/, "");
}

// recursively get pages
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

      if (fs.existsSync(indexPath)) {
        pages.push({
          title: folderName,
          url: folderUrl + "/",
          children: getPages(entryPath, folderUrl),
        });
      } else {
        pages.push(...getPages(entryPath, folderUrl));
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

// generate navigation
const navigation = getPages(CONTENT_DIR);

// write YAML
const yamlContent = `navigation: ${JSON.stringify(navigation, null, 2)}\n`;
fs.writeFileSync(OUTPUT_FILE, yamlContent);

console.log(`Navigation generated at ${OUTPUT_FILE}`);

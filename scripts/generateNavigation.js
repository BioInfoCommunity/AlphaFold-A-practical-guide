const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const CONTENT_DIR = "."; // root (no /en)
const OUTPUT_FILE = "./_data/navigation.yml";

// remove leading numbers
function stripNumber(name) {
  return name.replace(/^\d+-/, "");
}

function getPages(dir, parentUrl = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => e.name.endsWith(".md") || e.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  const pages = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    // ❗ skip unwanted folders
    if (entry.isDirectory()) {
      if (["_site", "_layouts", "_data", "scripts", ".git"].includes(entry.name)) continue;

      // const folderName = stripNumber(entry.name);
      const folderName = entry.name;
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
      if (["index.md", "README.md"].includes(entry.name)) continue;

      // const fileName = stripNumber(entry.name.replace(".md", ""));
      const fileName = entry.name.replace(".md", "");

      pages.push({
        title: fileName,
        url: `${parentUrl}/${fileName}/`,
      });
    }
  }

  return pages;
}

// ensure _data exists
if (!fs.existsSync("./_data")) fs.mkdirSync("./_data");

// generate navigation
const navigation = getPages(CONTENT_DIR);
console.log("Generated navigation structure:", JSON.stringify(navigation, null, 2));

console.log("yaml navigation:", yaml.dump({ navigation }));
// write YAML
fs.writeFileSync(OUTPUT_FILE, yaml.dump({ navigation }));

console.log("✅ Navigation generated:", OUTPUT_FILE);

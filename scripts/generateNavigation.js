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
    .filter(e => e.isDirectory() || e.name.endsWith(".md"))
    .sort((a, b) => a.name.localeCompare(b.name));

  // root: return language keys
  if (parentUrl === "" && dir === CONTENT_DIR) {
    const navigation = {};
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (["_site", "_layouts", "_data", "scripts", ".git"].includes(entry.name)) continue;

      navigation[entry.name] = getPages(path.join(dir, entry.name), `/${entry.name}`);
    }
    return navigation;
  }

  const pages = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (["_site", "_layouts", "_data", "scripts", ".git"].includes(entry.name)) continue;

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

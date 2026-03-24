import fs from "fs";
import path from "path";

const CONTENT_DIR = "."; // your markdown folder
const OUTPUT_FILE = "./navigation.yml";

function stripNumber(name) {
  // Remove leading numbers and dash, e.g., "01-intro" => "intro"
  return name.replace(/^\d+-/, "");
}

function getPages(dir, parentUrl = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => e.name.endsWith(".md") || e.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name)); // preserve numeric order

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
      if (
        entry.name.toLowerCase() === "readme.md" ||
        entry.name.toLowerCase() === "index.md"
      )
        return;
      const fileName = stripNumber(entry.name.replace(".md", ""));
      pages.push({
        title: fileName,
        url: `${parentUrl}/${fileName}/`,
      });
    }

  return pages;
}

const navigation = getPages(CONTENT_DIR);

fs.writeFileSync(OUTPUT_FILE, `navigation: ${JSON.stringify(navigation, null, 2)}\n`);
console.log(`Navigation generated at ${OUTPUT_FILE}`);

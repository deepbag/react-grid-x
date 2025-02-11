import * as fs from "fs";
import * as path from "path";

// Define source and destination directories
const sourceDir = path.join(__dirname, "../src/module");
const destinationDir = path.join(__dirname, "../package/src");

// Folders to copy
const foldersToCopy = ["themes", "types"];

async function copyFolders() {
  try {
    for (const folder of foldersToCopy) {
      const srcPath = path.join(sourceDir, folder);
      const destPath = path.join(destinationDir, folder);

      if (fs.existsSync(srcPath)) {
        fs.cpSync(srcPath, destPath, { recursive: true });
        console.log(`Copied ${folder} to ${destPath}`);
      } else {
        console.warn(`Skipping ${folder}: Source folder does not exist.`);
      }
    }
    console.log("Copy operation completed.");
  } catch (error) {
    console.error("Error copying folders:", error);
  }
}

copyFolders();

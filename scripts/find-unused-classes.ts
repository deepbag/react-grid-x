import * as fs from "fs";
import * as path from "path";
import { glob } from "glob";

const projectRoot = path.resolve(__dirname, "../src/document");
const scriptFileName = path.basename(__filename, path.extname(__filename));
const outputFilePath = path.resolve(__dirname, `./output/${scriptFileName}`);

// Function to get all files matching a pattern
const getFiles = async (pattern: string): Promise<string[]> => {
  return glob(pattern, { cwd: projectRoot, absolute: true });
};

// Extract class names from CSS files
const extractCssClasses = (filePath: string): Set<string> => {
  const content = fs.readFileSync(filePath, "utf-8");
  const classRegex = /\.([a-zA-Z_-][a-zA-Z0-9_-]*)\b/g;
  const classNames = new Set<string>();

  let match;
  while ((match = classRegex.exec(content)) !== null) {
    classNames.add(match[1]);
  }

  return classNames;
};

// Extract used class names from TSX files
const extractUsedClasses = (filePath: string): Set<string> => {
  const content = fs.readFileSync(filePath, "utf-8");
  const classRegex = /className=["'`]([^"'`]+)["'`]/g;
  const usedClasses = new Set<string>();

  let match;
  while ((match = classRegex.exec(content)) !== null) {
    match[1].split(/\s+/).forEach((cls) => {
      if (/^[a-zA-Z_-][a-zA-Z0-9_-]*$/.test(cls)) {
        usedClasses.add(cls);
      }
    });
  }
  return usedClasses;
};

// Find unused classes and write to a file
const findUnusedClasses = async () => {
  const cssFiles = await getFiles("**/*.css");
  const tsxFiles = await getFiles("**/*.tsx");

  const definedClasses = new Set<string>();
  const usedClasses = new Set<string>();

  cssFiles.forEach((file) => {
    const classes = extractCssClasses(file);
    classes.forEach((cls) => definedClasses.add(cls));
  });

  tsxFiles.forEach((file) => {
    const classes = extractUsedClasses(file);
    classes.forEach((cls) => usedClasses.add(cls));
  });

  const unusedClasses = [...definedClasses].filter(
    (cls) => !usedClasses.has(cls)
  );

  if (!fs.existsSync(outputFilePath)) {
    fs.mkdirSync(outputFilePath, { recursive: true });
  }

  // Write unused classes to a JSON file
  fs.writeFileSync(
    path.join(outputFilePath, "unused-class-names.json"),
    JSON.stringify(unusedClasses, null, 2),
    "utf-8"
  );

  console.log(`Unused CSS classes saved to: ${outputFilePath}`);
};

findUnusedClasses();

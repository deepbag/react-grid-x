import * as fs from "fs";
import * as path from "path";
import { glob } from "glob";

// Define types for class names and the structure of the output
interface ClassNamesOutput {
  [file: string]: string[]; // Map file names to class names
}

interface Duplicates {
  [className: string]: string[]; // Map duplicate class names to the files they appear in
}

// Function to extract all class names from a file
const extractClassNames = (filePath: string): string[] => {
  const content = fs.readFileSync(filePath, "utf-8");

  // Regular expression to match both plain className="..." and className={...}
  const regex = /className={([^}]+)}|className="([^"]+)"/g;
  const classNames: string[] = [];
  let match;

  while ((match = regex.exec(content)) !== null) {
    if (match[1]) {
      // Handle the case where className is inside a conditional (like className={isActive ? "active" : ""})
      const conditionMatch = match[1].match(/"([^"]+)"/);
      if (conditionMatch) {
        classNames.push(conditionMatch[1]);
      }
    } else if (match[2]) {
      // Handle the case where className is a plain string (like className="active")
      classNames.push(match[2]);
    }
  }

  return classNames;
};

// Function to extract class names from all .tsx files and output in the desired format
const extractClassNamesFromFiles = async (dir: string): Promise<string> => {
  try {
    // Specify patterns and exclusion rules here
    const pattern = `${dir}/**/*.tsx`; // Include all .tsx file

    // Glob for .tsx files with the exclusion patterns applied
    const files = await glob(pattern, {
      nodir: true, // Ensure that only files (not directories) are matched
    });

    const output: ClassNamesOutput = {};

    files.forEach((file) => {
      const classNames = extractClassNames(file);
      const relativeFileName = path.relative(dir, file); // Get relative file path

      if (classNames.length > 0) {
        // Only add files with non-empty className arrays
        output[relativeFileName] = classNames;
      }
    });

    // Get the current script file name dynamically without the file extension
    const scriptFileName = path.basename(__filename, path.extname(__filename));

    // Ensure the output directory exists
    const outputDir = path.resolve(__dirname, `./output/${scriptFileName}`);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true }); // Create directory if it doesn't exist
    }

    // Write output to JSON file
    const jsonFilePath = path.join(outputDir, "class-names.json");
    fs.writeFileSync(jsonFilePath, JSON.stringify(output, null, 2));

    console.log(`Class names extracted to ${jsonFilePath}`);
    return jsonFilePath; // Return the path of the generated JSON
  } catch (err) {
    console.error("Error finding files:", err);
    throw err; // Rethrow error for calling function to handle
  }
};

// Function to read the JSON file and find duplicate class names
const findDuplicateClassNames = (jsonFilePath: string): Duplicates => {
  const jsonData: ClassNamesOutput = JSON.parse(
    fs.readFileSync(jsonFilePath, "utf-8")
  );

  const classNameToFilesMap: { [className: string]: Set<string> } = {}; // Use Set to avoid duplicates within the same file

  // Loop through each file and its class names
  for (const [file, classNames] of Object.entries(jsonData)) {
    const uniqueClassNames = new Set(classNames); // Remove duplicates within the same file
    uniqueClassNames.forEach((className) => {
      if (!classNameToFilesMap[className]) {
        classNameToFilesMap[className] = new Set();
      }
      classNameToFilesMap[className].add(file); // Add file to the set for the class
    });
  }

  // Filter out class names that appear in more than one file (duplicates)
  const duplicates: Duplicates = {};
  for (const [className, files] of Object.entries(classNameToFilesMap)) {
    if (files.size > 1) {
      duplicates[className] = Array.from(files);
    }
  }

  return duplicates;
};

// Function to read the JSON file, split class names, and overwrite the same JSON
const splitClassNamesAndOverwriteJson = (jsonFilePath: string) => {
  const jsonData: ClassNamesOutput = JSON.parse(
    fs.readFileSync(jsonFilePath, "utf-8")
  );

  const updatedData: ClassNamesOutput = {};

  // Loop through each file and split class names by space
  for (const [file, classNames] of Object.entries(jsonData)) {
    const splitClassNames = classNames.flatMap((className) =>
      className.split(/\s+/)
    ); // Split by spaces
    updatedData[file] = splitClassNames;
  }

  for (const key in updatedData) {
    if (Array.isArray(updatedData[key])) {
      updatedData[key] = [...new Set(updatedData[key])];
    }
  }

  // Overwrite the same JSON file with the updated data
  fs.writeFileSync(jsonFilePath, JSON.stringify(updatedData, null, 2));

  console.log(`Updated class names saved to ${jsonFilePath}`);
};

// Path to the project directory (adjust as needed)
const projectDir = path.resolve(__dirname, "../src/module");

// Extract class names and save to a JSON file
extractClassNamesFromFiles(projectDir).then((jsonFilePath) => {
  splitClassNamesAndOverwriteJson(jsonFilePath);
  // Read the class names from the generated JSON file and find duplicates
  const duplicateClassNames = findDuplicateClassNames(jsonFilePath);

  // Get the current script file name dynamically without the file extension
  const scriptFileName = path.basename(__filename, path.extname(__filename));

  // Ensure the output directory exists
  const outputDir = path.resolve(__dirname, `./output/${scriptFileName}`);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the duplicates to a new JSON file
  fs.writeFileSync(
    path.join(outputDir, "duplicate-class-names.json"),
    JSON.stringify(duplicateClassNames, null, 2)
  );

  console.log(
    "Duplicate class names saved to output/duplicate-classnames.json"
  );
});

import * as fs from 'fs';
import * as path from 'path';

/**
 * Function to minify TypeScript interface files by removing comments and extra spaces,
 * and modify any import from './some-file' to './some-file-minified'.
 * 
 * @param filePath Path of the TypeScript file to be minified.
 * @param minifiedFolderPath Path of the folder to save the minified file.
 */
const minifyTypeScriptInterface = (filePath: string, minifiedFolderPath: string) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', filePath, err);
      return;
    }

    // Dynamically find any import starting with './' and append '-minified' before the file extension
    let modifiedData = data.replace(/import\s*(.*)\s*from\s*["']\.\/([^"']+)["']/g, 
      (match, p1, importPath) => {
        // Add '-minified' before the file extension
        const minifiedImportPath = importPath.replace(/(\.[a-zA-Z0-9]+)$/, '-minified$1');
        return `import ${p1} from "./${minifiedImportPath}"`;
      });

    // Regex to match interface definitions and remove comments
    modifiedData = modifiedData
      .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '') // Remove all comments (single-line and multi-line)
      .replace(/\s+/g, ' ') // Replace multiple whitespaces with a single space
      .replace(/ {\s*/g, ' {') // Remove space after opening brace
      .replace(/\s*} /g, '} ') // Remove space before closing brace
      .replace(/ ,/g, ',') // Remove space before commas
      .trim(); // Trim leading and trailing whitespace

    // Create the minified file name: original name with '-minified' appended before the '.ts' extension
    const minifiedFileName = path.basename(filePath, '.ts') + '-minified.ts';
    const minifiedFilePath = path.join(minifiedFolderPath, minifiedFileName);

    // Write the minified content to the new file in the 'minified' folder
    fs.writeFile(minifiedFilePath, modifiedData, (err) => {
      if (err) {
        console.error('Error writing minified file:', minifiedFilePath, err);
      } else {
        console.log('Minified:', filePath, '->', minifiedFileName);
      }
    });
  });
};

/**
 * Main function to process the TypeScript files in the provided directory.
 */
const processTypeScriptFiles = (tsFolder: string) => {
  // Path for the 'minified' folder
  const minifiedFolderPath = path.join(tsFolder, 'minified');

  // Create the 'minified' folder if it doesn't exist
  if (!fs.existsSync(minifiedFolderPath)) {
    fs.mkdirSync(minifiedFolderPath);
  }

  // Read the TypeScript files from the folder
  fs.readdir(tsFolder, (err, files) => {
    if (err) {
      console.error('Error reading the directory:', err);
      return;
    }

    // Filter out only .ts files
    const tsFiles = files.filter(file => file.endsWith('.ts'));

    // Minify each TypeScript file
    tsFiles.forEach((file) => {
      const filePath = path.join(tsFolder, file);
      minifyTypeScriptInterface(filePath, minifiedFolderPath);
    });
  });
};

// Directory containing TypeScript files (../src/types)
const tsFolder = path.join(__dirname, '../src/types');

// Process the TypeScript files to minify them
processTypeScriptFiles(tsFolder);

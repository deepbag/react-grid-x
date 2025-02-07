import * as fs from 'fs';
import * as path from 'path';
import CleanCSS from 'clean-css';

// Directory containing CSS files
const cssFolder = path.join(__dirname, '../src/themes/rgx-theme');

// Path for the 'minified' folder
const minifiedFolderPath = path.join(cssFolder, 'minified');

// Create the 'minified' folder if it doesn't exist
if (!fs.existsSync(minifiedFolderPath)) {
  fs.mkdirSync(minifiedFolderPath);
}

// Read the CSS files from the folder
fs.readdir(cssFolder, (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }

  // Filter out only .css files
  const cssFiles = files.filter(file => file.endsWith('.css'));

  // Minify each CSS file
  cssFiles.forEach((file) => {
    const filePath = path.join(cssFolder, file);

    // Create the minified file name: original name with '-minified' appended before the '.css' extension
    const minifiedFileName = file.replace('.css', '-minified.css');
    const minifiedFilePath = path.join(minifiedFolderPath, minifiedFileName); // Path for the minified file

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', filePath, err);
        return;
      }

      const minifiedData = new CleanCSS().minify(data).styles;

      // Write the minified content to the new file in the 'minified' folder
      fs.writeFile(minifiedFilePath, minifiedData, (err) => {
        if (err) {
          console.error('Error writing minified file:', minifiedFilePath, err);
        } else {
          console.log('Minified:', file, '->', minifiedFileName);
        }
      });
    });
  });
});

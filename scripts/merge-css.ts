import * as fs from 'fs';
import * as path from 'path';

const inputDir = path.join(__dirname, '../src/themes/rgx-theme');
const outputFile = path.join(inputDir, 'rgx-theme-combined.css');

// Read all CSS files from the directory
const cssFiles = fs.readdirSync(inputDir).filter(file => file.endsWith('.css'));

let mergedStyles = '';

// Loop through each file and append its content
cssFiles.forEach(file => {
    const filePath = path.join(inputDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    mergedStyles += `/* ${file} */\n` + fileContent + '\n\n';
});

// Write merged content to the output file
fs.writeFileSync(outputFile, mergedStyles, 'utf-8');

console.log(`Merged ${cssFiles.length} CSS files into ${outputFile}`);
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// D:\Coding 1\Node JS\Class 2 Core Modules\myNewFolder1\nf2.txt  (copypath)
// myNewFolder1\nf2.txt  (copyrelativepath)

const filePath = `D:\\Coding 1\\Node JS\\Class 2 Core Modules\\myNewFolder1\\nf2.txt`;
const fileExtension = path.extname(filePath);
const fileExactName = path.basename(filePath);
const folderLocation = path.dirname(filePath);

const folder1 = "user";
const folder2 = "student";
const file1 = "lewis.js";
const fullPath = path.join(folder1, folder2, file1);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(fileExtension);
// console.log(fileExactName);
// console.log(folderLocation);

// console.log(fullPath);

// BELOW EXISTS IN COMMONJS BY DEFAULT. IN ES6, WE HAVE TO CREATE THE VARIABLES MANUALLY.
// console.log(__filename);
// console.log(__dirname);

// ---

const srcPath = path.join(__dirname, "myNewFolder", "nf2.txt");
const destPath = path.join(__dirname, "myNewFolder2", path.basename(srcPath));

try {
  fs.copyFileSync(srcPath, destPath);
  console.log("File copy successful.");
} catch {
  console.log("File copy failed.");
}

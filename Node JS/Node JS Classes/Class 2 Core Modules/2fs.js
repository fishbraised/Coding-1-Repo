import fs from "fs";

// [Working with Files.]

// const f1_txt = fs.readFileSync("f1.txt", "utf8");
// console.log("f1_text: ", f1_txt);

// const data = fs.readFile("f1.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error: ", err);
//   } else {
//     console.log("f1_text: ", data);
//   }
// });

// console.log(data);

// ---

// fs.writeFileSync("f2.txt", "New file 2 data added.");
// console.log("f2.txt is updated.");

// fs.writeFile("f4.txt", "New file 4 data added.", (err) => {
//   if (err) console.log(err);
// });

// ---

// fs.appendFileSync("f3.txt", "\n\nNew file 3 data added.");
// fs.appendFile("f3.txt", "\n\nNew file 3 data added asyncronously.", (err) => {
//   if (err) console.log(err);
//   console.log("File 3 updated asynchronously...");
// });

// ---

// fs.unlinkSync("f4.txt");
// console.log("File 4 has been deleted.");

// There is often a logger function planned and created by companies to keep track of file system functions.

// ---

// [Working with Directories.]

// fs.mkdirSync("myNewFolder1");
// fs.mkdir("myNewFolder2", (err) => {
//   if (err) console.log(err);
// });

// // fs.writeFileSync("./myNewFolder1/nf1.txt", "New File 1 data added.");
// // fs.writeFileSync("./myNewFolder1/nf2.txt", "New File 2 data added.");

// const data = fs.readdirSync("myNewFolder1");
// console.log(data);

// fs.readdir("myNewFolder1", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// // fs.mkdirSync("myNewFolder3");

// fs.rmdirSync("myNewFolder3");
// fs.rmdir("myNewFolder2", (err) => {
//   if (err) console.log(err);
// });

// ---

// // [Works for Both Files and Directories]

// const doesFileExist = fs.existsSync('f1.txt');

// console.log("Does f1.txt exist? ---> " + doesFileExist);
// // Output: true (if it's there) or false (if it's missing)

// // You can use this to safely write code like:
// if (doesFileExist) {
//     // Read the file safely
// } else {
//     console.log("Wait! The file is missing!");
// }

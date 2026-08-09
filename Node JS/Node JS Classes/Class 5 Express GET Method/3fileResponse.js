import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const port = 3002;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("__filename is: ", __filename);
console.log("__dirname is: ", __dirname);

app.get("/greetings", (request, response) => {
  const filePath = path.join(__dirname, "greetings.html");

  // D:\Coding 1\Node JS\Node JS Classes\Class 5 Express GET Method\greetings.html
  // ^ response.sendFile(filePath)

  // greetings.html
  response.sendFile("greetings.html", { root: __dirname }, (err) => {
    if (err) {
      console.log("Error in fetching the file...");
    } else {
      console.log("File sent successfully to the Browser...");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at port:${port}...`);
});

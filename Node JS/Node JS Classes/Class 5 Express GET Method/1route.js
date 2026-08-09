import express from "express";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  console.log("Response: ", response);
  response.send("Welcome to homepage...");
});

app.get("/about", (request, response) => {
  response.send("Welcome to about page...");
});

app.get("/contact", (request, response) => {
  response.send("Contact: fishbraised@gmail.com", (err) => {});
});

app.listen(port, () => {
  console.log(`Server is running at port:${port}...`);
});

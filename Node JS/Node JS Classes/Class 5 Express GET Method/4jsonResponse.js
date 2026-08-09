import express from "express";
import { users, startups } from "./data.js";

const app = express();
const port = 3003;

app.get("/api/users", (request, response) => {
  response.json(users); // converts JS format ----> to JSON format
});

app.get("/api/startups", (request, response) => {
  response.json(startups);
});

app.listen(port, () => {
  console.log(`Server is running at port:${port}...`);
});

// REACT (in frontend)
// const response = await fetch(url, options);
// const data = await response.json(); // JSON ----> JS format

import express from "express";
import { startups } from "./data.js";

const app = express();
const port = 3004;

app.get("/api/startups", (request, response) => {
  const { country, industry, has_mvp, continent, is_seeking_funding } =
    request.query;

  let filteredData = startups; // 100 objects

  if (country) {
    filteredData = filteredData.filter(
      (eachObj) => country.toLowerCase() === eachObj.country.toLowerCase(),
    );
  } // 100 ---> 40 objects

  if (industry) {
    filteredData = filteredData.filter(
      (eachObj) => industry.toLowerCase() === eachObj.industry.toLowerCase(),
    ); // 40 ---> 20 objects
  }

  if (has_mvp) {
    filteredData = filteredData.filter(
      (eachObj) => JSON.parse(has_mvp.toLowerCase()) === eachObj.has_mvp,
    );
  }

  if (continent) {
    filteredData = filteredData.filter(
      (eachObj) => continent.toLowerCase() === eachObj.continent.toLowerCase(),
    );
  }

  if (is_seeking_funding) {
    ((filteredData = filteredData.filter(
      (eachObj) =>
        JSON.parse(is_seeking_funding.toLowerCase()) ===
        eachObj.is_seeking_funding,
    )),
      console.log("filteredData: ", filteredData));
  }

  response.json(filteredData); // 20 objects in response
});

app.listen(port, () => {
  console.log(`Server is running at port:${port}...`);
});

// Old:
// http://localhost:3004/api/startups
// http://localhost:3004/api/startups?country=USA
// http://localhost:3004/api/startups?country=USA&industry=AI

// Test Case 1:
// http://localhost:3004/api/startups?industry=renewable%20energy&country=germany&has_mvp=true
// Result: You should get an array with 1 object: "GreenGrid Energy".

// Test Case 2:
// http://localhost:3004/api/startups?industry=renewable%20energy&country=germany&has_mvp=false
// Result: You should get an empty array [] (Because GreenGrid Energy does have an MVP)

// Test Case 3:
// http://localhost:8000/api?continent=asia&is_seeking_funding=true&has_mvp=true
// Result: You should get exactly 4 startup objects (IDs 3, 22, 26, 29) that match all three criteria!

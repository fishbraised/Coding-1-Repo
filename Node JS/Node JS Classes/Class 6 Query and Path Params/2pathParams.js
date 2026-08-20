import express from "express";
import { startups } from "./data.js";

const app = express();
const port = 3005;

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

app.get("/api/crypto/:currency", (request, response) => {
  console.log(request.params);
});

app.get("/api/crypto", (request, response) => {
  console.log(request.params);
});

app.get("/api/:category/:type", (request, response) => {
  console.log("request: ", request.params);
});

app.listen(port, () => console.log(`Server is running at port:${port}...`));

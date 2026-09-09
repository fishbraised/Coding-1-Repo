import express from "express";
import { startups } from "./data.js";

const app = express();
const port = 3006;

// Challenge:
// 1. Add a new route which accepts GET requests to /api/<field>/<term>.
// 2. Filter the data based on the path params.
// 3. Serve the filtered data.
// Get all startups in a given country via api/country/<country name>
// Get all startups in a given continent via api/continent/<continent name>
// Get all startups in a given industry via api/industry/<industry name></industry>

// Test Cases
// These tests should work by your route:
//   api/country/india
//   api/continent/europe
//   api/industry/ai

app.get("/api/:field/:term", (request, response) => {
  const { field, term } = request.params; // field:country, term:india
  const allowedFields = ["country", "continent", "industry"];

  if (!allowedFields.includes(field)) {
    response.status(400);
    response.json({
      message:
        "Search field not allowed. Please use only 'country', 'continent', 'industry'",
    });
    return;

    // return response.status(400).json({
    //   message:
    //     "Search field not allowed. Please use only 'country', 'continent', 'industry'",
    // });
  }

  let data = startups.filter(
    (eachObj) => eachObj[field].toLowerCase() === term.toLowerCase(),
  );

  response.json(data);
});

// app.get("/api/boolean/:field/:number")

app.listen(port, () => console.log(`Server is running at port:${port}...`));

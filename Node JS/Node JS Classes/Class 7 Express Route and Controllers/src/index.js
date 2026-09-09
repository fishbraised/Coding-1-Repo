import express from "express";
import apiRouter from "./routes/apiRouter.js";
import salesRouter from "./routes/salesRouter.js";

const app = express();
const port = 3000;

app.use("/api", apiRouter);
app.use("/sales", salesRouter);

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});

// Terms:

// Route: "/api/services"

// Controller: (req, res) => {
//   res.json({ data: "services" });
// });                                  <-- Business logic

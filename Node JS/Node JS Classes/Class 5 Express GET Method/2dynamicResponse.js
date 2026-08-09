import express from "express";
import { format } from "date-fns";

const app = express();
const port = 3001;

app.get("/time", (request, response) => {
  const date = new Date();
  const formattedDate = format(date, "EEEE, MMMM do, y, h:mm:s a");

  response.send(`Server time is ${formattedDate}.`);
});

app.listen(port, () => {
  console.log(`Server is running at port:${port}...`);
});

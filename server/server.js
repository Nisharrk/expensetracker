const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

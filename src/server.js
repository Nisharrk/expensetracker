const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(morgan("common"));
app.use(helmet());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

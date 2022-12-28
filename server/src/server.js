const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const middlewares = require("./middlewares");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});

const app = express();
app.use(morgan("common"));
app.use(helmet());
app.use(cors()); //to-do

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Error Handler
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

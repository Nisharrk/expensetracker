const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const middlewares = require("./middlewares");
const expenses = require("./api/expenses");

// database connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});

const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
); //to-do
app.use(express.json()); // body parsing middleware

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// router
app.use("/api/expenses", expenses);

// Error Handlers
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

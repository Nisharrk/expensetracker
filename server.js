const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json("message", "This is a server");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

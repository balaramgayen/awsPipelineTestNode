const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome</h1></br><h6>go to route /hello</h6>");
});

app.get("/hello", (req, res) => {
  res.status(200).send("<h1>This text is after second changes on code</h1>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`backend running on ${PORT}`);
});

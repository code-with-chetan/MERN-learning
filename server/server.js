const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("hello chetan , A r u learning mearn series.");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running at PORT:${PORT}`);
});

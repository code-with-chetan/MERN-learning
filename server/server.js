require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-route");
const connectionDB = require("./utils/db");

app.use(express.json());

app.use("/api/auth", router);

const PORT = 4000;

connectionDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at PORT:${PORT}`);
  });
});

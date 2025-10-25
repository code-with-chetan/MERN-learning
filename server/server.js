const express = require("express");
const app = express();
const router = require("./router/auth-route");

app.use(express.json());

app.use("/api/auth", router);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server is running at PORT:${PORT}`);
});

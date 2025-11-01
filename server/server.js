require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-route");
const serviceRoute = require("./router/service-route");
const connectionDB = require("./utils/db");
const errorMiddleWare = require("./middlewares/error-middleware");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/data", serviceRoute);

const PORT = 4000;

app.use(errorMiddleWare);

connectionDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at PORT:${PORT}`);
  });
});

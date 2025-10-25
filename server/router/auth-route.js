const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).send("hello router in express router.");
});

router.route("/registration").get((req, res) => {
  res.status(200).send("hello registration form.");
});

module.exports = router;

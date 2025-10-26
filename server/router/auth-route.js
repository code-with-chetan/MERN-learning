const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controllers");

router.route("/").get(authControllers.home);
router.route("/registration").post(authControllers.registration);
router.route("/login").post(authControllers.login);

module.exports = router;

const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controllers");
const signUpSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(authControllers.home);
router
  .route("/registration")
  .post(validate(signUpSchema), authControllers.registration);
router.route("/login").post(authControllers.login);
router.route("/user").get(authMiddleware, authControllers.user);

module.exports = router;

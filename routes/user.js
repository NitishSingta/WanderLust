const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const reviewController = require("../controllers/users.js");

router
  .route("/signup")
  .get(reviewController.renderSignUpForm)
  .post(wrapAsync(reviewController.signup));

router
  .route("/login")
  .get(reviewController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    reviewController.login
  );

router.get("/logout", reviewController.logout);

module.exports = router;

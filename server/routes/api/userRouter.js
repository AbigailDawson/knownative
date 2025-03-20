const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/userCtrl");
const { verifyJWT } = require("./../../utils/jwt");

router.post("/login", usersCtrl.logIn);
router.post("/signup", usersCtrl.create);
router.post("/logout", usersCtrl.logOut);

router.post("/forgot-password", usersCtrl.forgotPassword);
router.post("/reset-password/:token", usersCtrl.resetPassword);

router.get("/getUser", verifyJWT, usersCtrl.getUser);

module.exports = router;

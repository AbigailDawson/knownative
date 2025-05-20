const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/userCtrl");
const { verifyJWT } = require("../../utils/jwt");

// Auth routes
router.post("/signup", usersCtrl.create);
router.post("/login", usersCtrl.logIn);
router.post("/logout", usersCtrl.logOut);

// Password reset routes
router.post("/forgot-password", usersCtrl.forgotPassword); 
router.post("/reset-password/:token", usersCtrl.resetPassword); 

// Protected route
router.get("/getUser", verifyJWT, usersCtrl.getUser);

module.exports = router;

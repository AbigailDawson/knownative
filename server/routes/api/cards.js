// server/routes/api/cards.js

const express = require("express");
const router = express.Router();
const { getAllCards } = require("../../controllers/api/cardsController");
const { verifyJWT } = require("../../utils/jwt");

router.get("/", verifyJWT, getAllCards);

module.exports = router;
// server/routes/api/cards.js

const express = require("express");
const router = express.Router();
const { getCards } = require("../../controllers/api/cardsController");
const { verifyJWT } = require("../../utils/jwt");

router.get("/", verifyJWT, getCards);

module.exports = router;
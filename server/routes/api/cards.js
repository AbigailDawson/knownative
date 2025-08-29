// server/routes/api/cards.js

const express = require("express");
const router = express.Router();
const { getAllCards, getCardsByTextId } = require("../../controllers/api/cardsController");
const { verifyJWT } = require("../../utils/jwt");

// Route to get all cards for a user
router.get("/", verifyJWT, getAllCards);

// Route to get cards by Text ID for a specific user
router.get('/text/:id', verifyJWT, getCardsByTextId);

module.exports = router;
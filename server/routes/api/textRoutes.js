const express = require("express");
const { getUserTexts } = require("../../controllers/api/textController");
const router = express.Router();

router.get("/:userId", getUserTexts);

module.exports = router;
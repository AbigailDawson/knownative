const express = require("express");
const { getUserTexts, deleteUserText } = require("../../controllers/api/textController");
const router = express.Router();

router.get("/:userId", getUserTexts);
router.delete("/:userId/text/:textId", deleteUserText);

module.exports = router;
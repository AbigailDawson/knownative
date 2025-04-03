const express = require("express");
const { addText, getUserTexts, deleteUserText } = require("../../controllers/api/textController");
const { verifyJWT } = require("./../../utils/jwt");
const router = express.Router();

router.get("/:userId", getUserTexts);
router.delete("/:userId/text/:textId", deleteUserText);
router.post('/add', verifyJWT, addText);

module.exports = router;
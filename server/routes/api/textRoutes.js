const express = require("express");
const { getUserTexts, deleteUserText } = require("../../controllers/api/textController");
const router = express.Router();
const { verifyJWT } = require("./../../utils/jwt");

router.get("/getTexts", verifyJWT, getUserTexts);
router.delete("/:userId/text/:textId", deleteUserText);

module.exports = router;
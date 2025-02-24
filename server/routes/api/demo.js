const express = require("express");
const router = express.Router();
const demoCtrl = require("../../controllers/api/demo.js");
const { addText } = require("../../controllers/api/demo.js");
const { verifyJWT } = require("./../../utils/jwt");

router.get("/demo", demoCtrl.getDemo);
router.post("/translate", demoCtrl.translateSentence);
router.post("/tokenize", demoCtrl.tokenizeText);
router.post('/texts', verifyJWT, addText);
module.exports = router;

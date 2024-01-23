const express = require('express')
const router = express.Router()
const textCtrl = require('../../controllers/api/text.js')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, textCtrl.tokenizeText);

module.exports = router;
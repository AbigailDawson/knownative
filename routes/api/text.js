const express = require('express')
const router = express.Router()
const textCtrl = require('../../controllers/api/text.js')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/tokenize', ensureLoggedIn, textCtrl.tokenizeText)
router.post('/add', ensureLoggedIn, textCtrl.addNewText)

module.exports = router
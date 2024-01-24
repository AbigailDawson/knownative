const express = require('express')
const router = express.Router()
const textsCtrl = require('../../controllers/api/texts.js')
const ensureLoggedIn = require('../../config/ensureLoggedIn.js')

router.post('/tokenize', ensureLoggedIn, textsCtrl.tokenizeText)
router.post('/add', ensureLoggedIn, textsCtrl.addNewText)
router.get('/', ensureLoggedIn, textsCtrl.getAll)
router.get('/:id', ensureLoggedIn, textsCtrl.getText)

module.exports = router
const express = require('express')
const router = express.Router()
const textsCtrl = require('../../controllers/api/texts.js')
const ensureLoggedIn = require('../../config/ensureLoggedIn.js')

router.post('/tokenize', ensureLoggedIn, textsCtrl.tokenizeText)
router.post('/add', ensureLoggedIn, textsCtrl.addNewText)
router.delete('/:id/delete', ensureLoggedIn, textsCtrl.deleteText)
router.post('/:id/save', ensureLoggedIn, textsCtrl.saveWord)
router.get('/', ensureLoggedIn, textsCtrl.getAll)
router.get('/:id', ensureLoggedIn, textsCtrl.getText)
router.get('/:id/get-saved-words', ensureLoggedIn, textsCtrl.getSavedWords)
router.post('/translate', ensureLoggedIn, textsCtrl.translateSentence)
router.post('/simplify', ensureLoggedIn, textsCtrl.simplifyText)

module.exports = router
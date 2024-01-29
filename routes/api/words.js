const express = require('express')
const router = express.Router()
const wordsCtrl = require('../../controllers/api/words.js')
const ensureLoggedIn = require('../../config/ensureLoggedIn.js')

router.post('/:id/update', ensureLoggedIn, wordsCtrl.updateMeaning)

module.exports = router
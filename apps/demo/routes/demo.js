const express = require('express')
const router = express.Router()
const demoCtrl = require('../controllers/demo.js')

router.get('/demo', demoCtrl.getDemo)
router.post('/translate', demoCtrl.translateSentence)
router.post('/tokenize', demoCtrl.tokenizeText)

module.exports = router
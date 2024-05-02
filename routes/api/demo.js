const express = require('express')
const router = express.Router()
const demoCtrl = require('../../controllers/api/demo.js')

router.get('/demo', demoCtrl.getDemo)
router.post('/translate', demoCtrl.translateSentence)

module.exports = router
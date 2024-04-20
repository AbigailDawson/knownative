const express = require('express')
const router = express.Router()
const demoCtrl = require('../../controllers/api/demo.js')

router.get('/demo', demoCtrl.getDemo)
router.post('/generate', demoCtrl.generateEasierText)

module.exports = router
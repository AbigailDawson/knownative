const express = require('express')
const router = express.Router()
const demoCtrl = require('../../controllers/api/demo.js')
const ensureLoggedIn = require('../../config/ensureLoggedIn.js')

router.get('/demo', ensureLoggedIn, demoCtrl.getDemo)

module.exports = router
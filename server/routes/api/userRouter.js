const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/userCtrl')
// const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/login', usersCtrl.logIn)
router.post('/signup', usersCtrl.create);
// router.get('/check-token', ensuredLoggedIn, usersCtrl.checkToken)

module.exports = router
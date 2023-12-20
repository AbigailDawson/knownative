var express = require('express');
var router = express.Router();
const decksCtrl = require('../controllers/decks')

router.get('/all', decksCtrl.allDecks)
// router.get('/', articlesCtrl.myArticles)

module.exports = router;

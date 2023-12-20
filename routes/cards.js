var express = require('express');
var router = express.Router();
const cardsCtrl = require('../controllers/cards')

router.get('/search', cardsCtrl.search)
router.get('/show-results', cardsCtrl.showResults)

module.exports = router;

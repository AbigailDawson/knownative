var express = require('express');
var router = express.Router();
const articlesCtrl = require('../controllers/articles')

// GET /articles/all
router.get('/all', articlesCtrl.allArticles)

module.exports = router;

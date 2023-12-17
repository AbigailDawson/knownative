var express = require('express');
var router = express.Router();
const articlesCtrl = require('../controllers/articles')

router.get('/all', articlesCtrl.allArticles)
// router.get('/index', articlesCtrl.myArticles)


module.exports = router;

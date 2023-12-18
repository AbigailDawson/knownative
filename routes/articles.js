var express = require('express');
var router = express.Router();
const articlesCtrl = require('../controllers/articles')

router.get('/all', articlesCtrl.allArticles)
router.get('/', articlesCtrl.myArticles)
router.get('/new', articlesCtrl.newArticle)
router.get('/:id', articlesCtrl.showArticle)
router.get('/:id/edit', articlesCtrl.editArticle)

router.post('/', articlesCtrl.createArticle)

module.exports = router;

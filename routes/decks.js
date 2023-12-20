var express = require('express');
var router = express.Router();
const decksCtrl = require('../controllers/decks')

router.get('/all', decksCtrl.all)
// router.get('/', articlesCtrl.myArticles)
// router.get('/new', articlesCtrl.newArticle)
// router.get('/:id', articlesCtrl.showArticle)
// router.get('/:id/edit', articlesCtrl.editArticle)
// router.post('/', articlesCtrl.createArticle)
// router.put('/:id', articlesCtrl.updateArticle)
// router.delete('/:id', articlesCtrl.deleteArticle)
// router.post('/:id/save', articlesCtrl.saveArticle);

module.exports = router;

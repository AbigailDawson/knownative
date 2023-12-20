var express = require('express');
var router = express.Router();
const articlesCtrl = require('../controllers/articles')

router.get('/all', articlesCtrl.all)
router.get('/', articlesCtrl.mine)
router.get('/new', articlesCtrl.new)
router.get('/:id', articlesCtrl.show)
router.get('/:id/edit', articlesCtrl.edit)
router.post('/', articlesCtrl.create)
router.put('/:id', articlesCtrl.update)
router.delete('/:id', articlesCtrl.delete)
router.post('/:id/save', articlesCtrl.save);

module.exports = router;

const express = require('express');
const {
  addText,
  getUserTexts,
  deleteUserText,
  saveWord,
} = require('../../controllers/api/textController');
const router = express.Router();
const { verifyJWT } = require('./../../utils/jwt');

// All routes start with: /api/texts
router.get('/getTexts', verifyJWT, getUserTexts);
router.delete('/:userId/text/:textId', deleteUserText);
router.post('/add', verifyJWT, addText);
router.post('/saveWord', verifyJWT, saveWord);

module.exports = router;

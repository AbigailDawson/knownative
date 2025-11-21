const express = require('express');
const router = express.Router();
const { verifyJWT } = require('./../../utils/jwt');
const {
  addText,
  getUserTexts,
  deleteUserText,
  saveWord,
  getTextTokens,
} = require('../../controllers/api/textController');

// All routes start with: /api/texts
router.get('/getTexts', verifyJWT, getUserTexts);
router.get('/:textId/tokens', verifyJWT, getTextTokens);
router.delete('/:userId/text/:textId', deleteUserText);
router.post('/add', verifyJWT, addText);
router.post('/saveWord', verifyJWT, saveWord);

module.exports = router;

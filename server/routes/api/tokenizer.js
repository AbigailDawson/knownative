const express = require('express');
const tokenizer = require('../../controllers/api/tokenizer/tokenizer.js');

const router = express.Router();

router.post('/tokenize', tokenizer.tokenizeText);

module.exports = router;
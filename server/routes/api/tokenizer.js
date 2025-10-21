const express = require('express');
const { tokenizeText } = require('../../controllers/api/tokenizer/tokenizer.js');
const router = express.Router();

router.post('/tokenize', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'No Text Provided' });
  }

  try {
    const text_details = await tokenizeText(text);
    res.json({ text_details: text_details });
  } catch (error) {
    console.error('Tokenization error:', error);
    res.status(500).json({ error: 'Failed to segment text', details: error.message });
  }
});

module.exports = router;
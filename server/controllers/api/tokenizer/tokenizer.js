const express = require('express');
const OpenAI = require('openai');
const { zodTextFormat } = require('openai/helpers/zod');
const { textDetails } = require('../../../models/TextDetailsSchema.js');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Load the prompt.md file:
let prompt = '';

try {
  const filePath = path.join(__dirname, '../tokenizer/input/prompt.md');
  prompt = fs.readFileSync(filePath, 'utf8');
} catch (error) {
  console.error('Failed to load prompt file: ', error);
}

// Set up OpenAI client:
const openai = new OpenAI();

// Define the tokenizeText() function:
async function tokenizeText(text) {
  try {
    const response = await openai.responses.parse({
      model: 'chatgpt-4o-latest',
      input: [
        {
          role: 'system',
          content: prompt,
        },
        {
          role: 'user',
          content: text,
        },
      ],
      text: {
        format: zodTextFormat(textDetails, 'text_details'),
      },
    });

    const text_details = response.output_parsed;
    console.log('Tokenized output: ', text_details);

    return text_details;
  } catch (error) {
    console.error('Failed to segment text: ', error);
    throw error;
  }
}

// Define the POST /tokenize endpoint:
router.post('/tokenize', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'No Text Provided' });
  }

  try {
    const text_details = await tokenizeText(text);
    res.json({ text_details: text_details });
  } catch (error) {
    res.status(500).json({ error: 'Failed to segment text', details: error.message });
  }
});

module.exports = {
    tokenizeText,
    router
};
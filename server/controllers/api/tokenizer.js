const OpenAI = require('openai');
const { zodTextFormat } = require('openai/helpers/zod');
const { textDetailsSchema } = require('../../models/TextDetailsSchema.js');
const fs = require('fs');
const path = require('path');

// Load the prompt.md file:
let prompt = '';
try {
  const filePath = path.join(__dirname, '../../config/tokenizer/input/prompt.md');
  prompt = fs.readFileSync(filePath, 'utf8');
  console.log('Prompt loaded successfully');
} catch (error) {
  console.error('Failed to load prompt file: ', error);
}

// Set up OpenAI client:
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

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
        format: zodTextFormat(textDetailsSchema, 'textDetails')
      }
    });

    const textDetails = response.output_parsed;
    console.log('Tokenized output: ', textDetails);

    return textDetails;
  } catch (error) {
    console.error('Failed to segment text: ', error);
    throw error;
  }
}

module.exports = {
  tokenizeText
};

const OpenAI = require('openai');
const { zodTextFormat } = require('openai/helpers/zod');
const { textDetails } = require('../../../models/TextDetailsSchema.js');
const fs = require('fs');
const path = require('path');

// Load the prompt.md file:
let prompt = '';

try {
  const filePath = path.join(__dirname, './input/prompt.md');
  prompt = fs.readFileSync(filePath, 'utf8');
  console.log('Prompt loaded successfully');
} catch (error) {
  console.error('Failed to load prompt file: ', error);
}

// Set up OpenAI client:
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

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
        format: zodTextFormat(textDetails, 'text_details')
      }
    });

    const text_details = response.output_parsed;
    console.log('Tokenized output: ', text_details);

    return text_details;
  } catch (error) {
    console.error('Failed to segment text: ', error);
    throw error;
  }
}

module.exports = {
  tokenizeText
};

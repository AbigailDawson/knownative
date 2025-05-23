const path = require("path");
const { Translate } = require("@google-cloud/translate").v2;
const tokenize = require("chinese-tokenizer").loadFile(
  path.join(__dirname, "../../config/cedict_ts.u8.txt")
);
const translate = new Translate({ key: process.env.GOOGLE_TRANSLATE_API_KEY });
const Text = require('../../models/text.js')

module.exports = {
  getDemo,
  tokenizeText,
  translateSentence,
  addText,
};

async function getDemo(req, res) {}

function tokenizeText(req, res) {
  const { text } = req.body;
  const tokenizedText = tokenize(text);
  console.log(tokenizedText);
  res.json(tokenizedText);
}

async function translateSentence(req, res) {
  const { sentence } = req.body;
  const target = "en";

  try {
    let [translations] = await translate.translate(sentence, target);
    translations = Array.isArray(translations) ? translations : [translations];
    res.json(translations[0]);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function addText(req, res) {
  const { content, title, source } = req.body;
  const userId = req.user._id;

  console.log('User ID in addText:', userId);
  console.log('Adding text:', content);
  
  try {
    const newText = new Text({
      user: userId,
      title,
      source,
      content
    });
    console.log('New text:', newText);
    await newText.save();
    res.status(201).json({ message: 'Text added successfully', text: newText });
  } catch (error) {
    console.error('Error saving text:', error);
    res.status(500).json({ error: 'Failed to add text' });
  }
}

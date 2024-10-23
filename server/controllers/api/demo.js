const path = require('path')
const {Translate} = require('@google-cloud/translate').v2
const tokenize = require('chinese-tokenizer').loadFile(path.join(__dirname, '../../config/cedict_ts.u8.txt'))
const tokenize_jieba = require('nodejieba');
const translate = new Translate({ key: process.env.GOOGLE_TRANSLATE_API_KEY });

module.exports = {
  getDemo,
  tokenizeText,
  translateSentence,
}

async function getDemo(req, res) {
  
}

function tokenizeText(req, res) {
  console.log('tokenizeText called')
  const { text } = req.body
  console.log('text (pre-tokenize):', text)
  const tokenizedText = tokenize_jieba.cut(text)
  console.log('text (post-tokenize):', tokenizedText)
  res.json(tokenizedText)
}

async function translateSentence(req, res) {
  const { sentence } = req.body
  const target = 'en'

  try {
    let [translations] = await translate.translate(sentence, target)
    translations = Array.isArray(translations) ? translations : [translations]
    res.json(translations[0])
  } catch(error) {
    res.status(400).json(error)
  }
}
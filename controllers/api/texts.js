const path = require('path')
const tokenize = require('chinese-tokenizer').loadFile(path.join(__dirname, '../../config/cedict_ts.u8.txt'))
const Text = require('../../models/text')
const Word = require('../../models/word')

module.exports = {
  tokenizeText,
  addNewText,
  getAll,
  getText,
  saveWord,
  getSavedWords
}

function tokenizeText(req, res) {
  const { text } = req.body
  const tokenizedText = tokenize(text)
  res.json(tokenizedText)
}

async function getAll(req, res) {
  const texts = await Text.find({ user: req.user._id })
  res.json(texts)
}

async function addNewText(req, res) {
  req.body.user = req.user._id
  const text = await Text.create(req.body)
  
  try {
    await text.save()
    res.json(text)

  } catch (error) {
    console.log(error)
    res.status(400).json(error)  }
}

async function getText(req, res) {
  const text = await Text.findById(req.params.id)
  res.json(text)
}

async function saveWord(req, res) {

  const { word } = req.body
  const thisText = await Text.findById(req.params.id)

  if (word.matches && word.matches[0]) {
    word.pinyin = word.matches[0].pinyinPretty
    word.meaning = word.matches[0].english
  } else {
    word.pinyin = ''
    word.meaning = ''
  }

  word.user = req.user._id
  word.textRef = thisText

  try {
    const newWord = await Word.create(word)
    const savedWord = await newWord.save()
    thisText.words.push(savedWord)
    await thisText.save()
    
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

async function getSavedWords(req, res) {
  const text = await Text.findById(req.params.id).populate('words')
  const savedWords = text.words
  res.json(savedWords)
}
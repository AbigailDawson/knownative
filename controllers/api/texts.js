const path = require('path')
const tokenize = require('chinese-tokenizer').loadFile(path.join(__dirname, '../../config/cedict_ts.u8.txt'))
const Text = require('../../models/text')
const Word = require('../../models/word')
const {Translate} = require('@google-cloud/translate').v2
const translate = new Translate();

module.exports = {
  tokenizeText,
  addNewText,
  deleteText,
  getAll,
  getText,
  saveWord,
  getSavedWords,
  translateSentence,
  generateEasierText,
  saveEasierText,
  removeEasierText,
  archiveText,
  favoriteText
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
  // req.body.content = req.body.content
  
  try {
    const text = await Text.create(req.body)
    await text.save()
    res.json(text)

  } catch (error) {
    console.log(error)
    res.status(400).json(error)  
  }
}

async function deleteText(req, res) {
  try {
    const deletedText = await Text.findOneAndDelete({ _id: req.params.id })
    res.json(deletedText)
  } catch (error) {
    res.status(400).json(error)  
  }
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
    word.meaning = word.meaning.includes('/') ? word.meaning.split('/')[0].trim() : word.meaning
  } else {
    word.pinyin = ''
    word.meaning = ''
  }

  word.user = req.user._id
  word.textRef = thisText

  try {
    const newWord = await Word.create(word)
    const savedWord = await newWord.save()
    res.json(savedWord);
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

async function generateEasierText(req, res) {
  const { content } = req.body
  const API_KEY = process.env.OPENAI_KEY

  const options = {
    stream: false,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { 
          role: 'user', 
          content: `Using traditional Chinese characters, generate an easier version of the following Chinese text suitable for a 5th-grade reading level: \n '${content}'`
        }
      ],
      max_tokens: 500,
    })
  }

  try {
    const easierText = await fetch('https://api.openai.com/v1/chat/completions', options)
    const data = await easierText.json()
    res.send(data)
  } catch(error) {
    console.error(error)
  }
}

async function saveEasierText(req, res) {
  const { easierText } = req.body
  
  try {
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id, 
      { easierText }, 
      { new: true }
      )
    res.json(updatedText)
  } catch(error) {
    res.status(400).json(error)
  }
}

async function removeEasierText(req, res) {  
  try {
    const updatedText = await Text.findById(req.params.id)
    updatedText.easierText = ''
    await updatedText.save()
    res.json(updatedText)
  } catch(error) {
    res.status(400).json(error)
  }
}

async function archiveText(req, res) {
  try {
    const updatedText = await Text.findById(req.params.id)
    updatedText.archived = !updatedText.archived
    await updatedText.save()
    res.json(updatedText)
  } catch(error) {
    res.status(400).json(error)
  }
}

async function favoriteText(req, res) {
  try {
    const updatedText = await Text.findById(req.params.id)
    updatedText.favorite = !updatedText.favorite
    await updatedText.save()
    res.json(updatedText)
  } catch(error) {
    res.status(400).json(error)
  }
}
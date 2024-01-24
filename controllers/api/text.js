const path = require('path')
const tokenize = require('chinese-tokenizer').loadFile(path.join(__dirname, '../../config/cedict_ts.u8.txt'))
const Text = require('../../models/text')

module.exports = {
  tokenizeText,
  addNewText
}

function tokenizeText(req, res) {
  const { selection } = req.body
  const tokenizedText = tokenize(selection)
  res.json(tokenizedText)
}

async function addNewText(req, res) {
  const text = new Text(req.body)
  text.user = req.user._id
  
  try {
    await text.save()
    res.status(201).json(text)

  } catch (error) {
    console.log(error)
    res.status(400).json(error)  }
}
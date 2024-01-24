const path = require('path')
const tokenize = require('chinese-tokenizer').loadFile(path.join(__dirname, '../../config/cedict_ts.u8.txt'))
const Text = require('../../models/text')

module.exports = {
  tokenizeText,
  addNewText,
  getAll,
  getText,
}

function tokenizeText(req, res) {
  const { selection } = req.body
  const tokenizedText = tokenize(selection)
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
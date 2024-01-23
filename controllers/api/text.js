const path = require('path');
const tokenize = require('chinese-tokenizer').loadFile(path.join(__dirname, '../../config/cedict_ts.u8.txt'));

module.exports = {
  tokenizeText
}

function tokenizeText(req, res) {
  try {
    const { selection } = req.body
    const tokenizedText = tokenize(selection)
    console.log('tokenizedText: ', tokenizedText)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}
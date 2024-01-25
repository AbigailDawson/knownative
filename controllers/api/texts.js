const path = require('path')
const tokenize = require('chinese-tokenizer').loadFile(path.join(__dirname, '../../config/cedict_ts.u8.txt'))
const Text = require('../../models/text')

module.exports = {
  tokenizeText,
  addNewText,
  getAll,
  getText,
  // save,
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

// async function save(req, res) {
//   console.log('req.body:', req.body);
//   try {
//     const text = await Text.findOne({
//       _id: req.params.id,
//       user: req.body.user
//     })
//     if (!text) {
//       console.log('no text found')
//       return res.status(400).json(error)
//     }
//     const newItem = { traditional: req.body }
//     text.savedItems.push(newItem)
//     await text.save()

//   } catch (error) {
//     console.log(error)
//   }
//   console.log('req.body: ', req.body)
// }
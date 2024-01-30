const path = require('path')
const Text = require('../../models/text')
const Word = require('../../models/word')

module.exports = {
  updateMeaning,
  deleteWord
}

async function updateMeaning(req, res) {
  const { meaning } = req.body
  try {
    const updatedWord = await Word.findByIdAndUpdate(
      req.params.id, 
      { meaning }, 
      { new: true }
      )
    res.json(updatedWord)
  } catch (error) {
    console.error(error)
  }
}

async function deleteWord(req, res) {
  try {
    const deletedWord = await Word.findOneAndDelete({ _id: req.params.id })
    res.json(deletedWord)
  } catch( error) {
    console.error(error)
  }
}
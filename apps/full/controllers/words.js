const Word = require('../../apps/full/models/word')

module.exports = {
  updateMeaning,
  deleteWord,
  countSavedWords
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

async function countSavedWords(req, res) {
  try {
    const savedWords = await Word.find({ user: req.user._id })
    const numSavedWords = savedWords.length
    res.json(numSavedWords)
  } catch( error) {
    console.error(error)
  }
}
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const textSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  source: String,
  content: {
    type: String,
    required: true
  },
  words: [{
    type: Schema.Types.ObjectId,
    ref: 'Word',
  }],
  simplifiedText: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Text', textSchema)
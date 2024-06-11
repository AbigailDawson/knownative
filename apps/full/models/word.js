const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wordSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  textRef: {
    type: Schema.Types.ObjectId,
    ref: 'Text',
    required: true,
  },
  traditional: {
    type: String,
    default: ''
  },
  easier: {
    type: String,
    default: ''
  },
  pinyin: {
    type: String,
    default: ''
  },
  meaning: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Word', wordSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const savedItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  text: {
    type: Schema.Types.ObjectId,
    ref: 'Text',
    required: true,
  },
  traditional: {
    type: String,
    default: ''
  },
  simplified: {
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
  },
  sentence: {
    type: String,
    default: ''
  },
  translation: {
    type: String,
    default: ''
  },
  notes: {
    type: String,
    default: ''
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('savedItem', savedItemSchema)
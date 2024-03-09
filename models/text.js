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
  easierText: {
    type: String,
    default: ''
  },
  archived: {
    type: Boolean,
    default: false
  },
  favorite: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Text', textSchema)
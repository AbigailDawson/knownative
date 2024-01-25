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
  savedItems: [{
    type: Schema.Types.ObjectId,
    ref: 'savedItem',
  }],
}, {
  timestamps: true
})

module.exports = mongoose.model('Text', textSchema)
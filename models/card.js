const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    decks: [{
        type: Schema.Types.ObjectId,
        ref: 'Deck'
    }],
    traditional: String,
    simplified: String,
    pinyin: String,
    definition: String,
    exampleSentence: String,
    notes: String,
    public: Boolean,
    articles: [{
        type: Schema.Types.ObjectId,
        ref: 'Article'
    }],
    userCreating: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    usersSaving: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Card', cardSchema)
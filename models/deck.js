const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    public: Boolean,
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card'
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

const Deck = mongoose.model('Deck', deckSchema)
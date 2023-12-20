const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema({
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

module.exports = mongoose.model('Deck', deckSchema)
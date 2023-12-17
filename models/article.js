const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String,
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Politics', 'Business', 'Opinion', 'Health', 'Entertainment', 'Tech', 'Lifestyle', 'Travel', 'Education', 'Environment', 'Sports', 'Misc'],
        required: true
    },
    content: {
        type: String,
        required: true
    },
    public: Boolean,
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }],
    comments: [commentSchema],
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

module.exports = mongoose.model('Article', articleSchema)
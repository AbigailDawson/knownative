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
    title: String,
    source: String,
    category: String,
    content: String,
    public: Boolean,
    user: [ObjectId],
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }],
    comments: [commentSchema]
}, {
    timestamps: true
})

const Article = mongoose.model('Article', articleSchema)
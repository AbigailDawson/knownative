const Article = require('../models/article');

module.exports = {
    allArticles,
    myArticles
}

async function allArticles(req, res) {
    const articles = await Article.find({ 'public' : true });
    res.render('articles/all', { 
        title: 'All Articles', 
        articles 
    })
}

async function myArticles(req, res) {
    const articles = await Article.find({ 
        userCreating: req.user._id,
        userSaving: req.user._id
     });
    res.render('articles/index', { 
        title: 'My Articles', 
        articles 
    })
}
const Article = require('../models/article');

module.exports = {
    allArticles
}

async function allArticles(req, res) {
    const articles = await Article.find({ 'public' : true });
    res.render('articles/all', { 
        title: 'All Articles', 
        articles 
    })
}
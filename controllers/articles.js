const Article = require('../models/article');

module.exports = {
    allArticles,
    myArticles,
    newArticle,
    createArticle
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

async function newArticle(req, res) {
    const validCategories = await Article.schema.path('category').enumValues;
    res.render('articles/new', {
        title: 'Add an Article',
        validCategories,
        errorMsg: 'Add article failed'
    })
}

async function createArticle(req, res) {
    const article = new Article(req.body);
    article.userCreating = req.user._id;
    try {
        await article.save();
        console.log(article)
        res.redirect(`/articles`);
    } catch (err) {
        console.log(err.message)
        res.redirect('/articles/new')
    }
}
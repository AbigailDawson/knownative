const Article = require('../models/article');

module.exports = {
    all,
    mine,
    new: newArticle,
    create,
    show,
    edit,
    update,
    delete: deleteArticle,
    save
}

async function all(req, res) {
    const articles = await Article.find({ 'public' : true });
    res.render('articles/all', { 
        title: 'All Articles', 
        articles 
    })
}

async function mine(req, res) {
    const articles = await Article.find({ 
        $or: [
            { userCreating: req.user._id },
            { userSaving: req.user._id }
        ]
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

async function create(req, res) {
    const article = new Article(req.body);
    article.userCreating = req.user._id;
    article.userName = req.user.name;
    article.userAvatar = req.user.avatar;
    try {
        await article.save();
        console.log(article)
        res.redirect(`/articles`);
    } catch (err) {
        console.log(err.message)
        res.redirect('/articles/new')
    }
}

async function show(req, res) {
    const article = await Article.findById(req.params.id).populate('userCreating')
    res.render('articles/show', {
        title: `${article.title}`,
        article
    })
}

async function edit(req, res) {
    const article = await Article.findOne({
        _id: req.params.id,
        userCreating: req.user._id
    })
    if (!article) return res.redirect('/articles');
    const validCategories = await Article.schema.path('category').enumValues;
    res.render('articles/edit', {
        title: 'Edit Details',
        article,
        validCategories
    })
}

async function update(req, res) {
    try {
        if(!req.body.public) {
            req.body.public = false;
        }
        const updatedArticle = await Article.findOneAndUpdate(
            { _id: req.params.id, userCreating: req.user._id},
            req.body,
            { new: true }
        );
        return res.redirect(`/articles/${updatedArticle._id}`)
    } catch (err) {
        console.log(err.message);
        return res.redirect('/articles')
    }
}

async function deleteArticle(req, res) {
    await Article.findOneAndDelete({
        _id: req.params.id,
        userCreating: req.user._id
    });
    res.redirect('/articles')
}

async function save(req, res) {
    const article = await Article.findById(req.params.id);
    console.log('article: ', article)
    if (article.usersSaving.id(req.user._id)) return res.redirect('/articles');
    article.usersSaving.push(req.user._id);
    await article.save();
    res.redirect(`articles/${article._id}`)
}
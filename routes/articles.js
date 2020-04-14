const router = require('express').Router();
let Articles= require('../models/articles.models');

//REQUEST GET ALL ARTICLES 
router.route('/').get((req,res) => {
    Articles.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
});

//REQUEST ADD NEW ARTICLE
router.post('/add', (req,res) => {
    const newArticle = new Articles({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname
    })

    newArticle.save()
     .then(()=> res.json('the new Article posted successfully'))
     .catch(err => res.status(400).json('Error: ' + err));
});

//REQUEST FIND ARTICLE BY ID 
router.get('/:id', (req,res) => {
    Articles.findById(req.params.id)
     .then(article => res.json(article))
     .catch(err => res.status(400).json('Error: ' + err));
})

//REQUEST FIND ARTICLE BY ID AND UPDATE 
router.put('/update/:id', (req,res) => {
    Articles.findById(req.params.id)
     .then(article => {
         article.title = req.body.title;
         article.article = req.body.article;
         article.authorname = req.body.authorname;
     
         article
         .save()
         .then(()=> res.json('the article updated successfully'))
         .catch(err => res.status(400).json('Error: ' + err));
     })
     .catch(err => res.status(400).json('Error: ' + err));
});
//REQUEST FIND ARTICLE BY ID AND DELETE
router.delete('/:id', (req,res) => {
    Articles.findByIdAndDelete(req.params.id)
    .then(()=> res.json('the article is deleted successfully'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

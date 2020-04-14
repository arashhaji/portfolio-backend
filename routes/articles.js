const router = require('express').Router();
let Articles= require('../models/articles.models');

router.route('/').get((req,res) => {
    Articles.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

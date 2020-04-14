const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articlesSchema = new Schema({
    title: { type: String, required: true },
    article: { type: String, required: true },
    authorname: { type: String, required: true}

}, {
    timestamps: true,
});

const Articles = mongoose.model('Articles',  articlesSchema)

module.exports = Articles;
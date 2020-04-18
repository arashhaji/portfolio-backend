const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


require('dotenv').config();

const app = express();
const port = process.env.Port || 5050;

app.use(express.json());
app.use(cors());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
});

const contactsRouter = require('./routes/contacts');
const articlesRouter = require('./routes/articles');

app.use('/contacts', contactsRouter);
app.use('/articles', articlesRouter);


app.listen(port, () => {
    console.log(`The app is running on port: ${port}`)
});
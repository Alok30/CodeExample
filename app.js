const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

const db =mongoose.connect('mongodb://localhost/author');
// const Author = require('./models/authorModel.js');
const authorRouter = require('./routes/authorRouter');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

console.log('here')
app.use('/api',authorRouter);

app.get('/', (req, res) => {
    res.send('WELCOME to my nodemon API Alok Dubey');
})

app.listen(port, () => {
    console.log('Running on port' + port);
})
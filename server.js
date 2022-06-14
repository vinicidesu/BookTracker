const url = require('./config/db.config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
var bookRoute = require('./routes/bookRoute');
const Book = require('./model/Book');

//Registra os livros
app.post('/book',(req, res) => {
        const newBook = new Book();
        newBook.name = req.body.name;
        newBook.author = req.body.author;
        newBook.save();
        res.json({ success: true, name: newBook.name});
});

//Retorna os livros
app.get('/', (req, res) => {
    Book.find({}, function(err, books){
        if(err){
            res.send("Error");
            next();
        }
        res.json(books);
    });
});

mongoose.connect(url)
    const con = mongoose.connection;
    con.on('open', function(){
        console.log('Mongo listening on port 27017')
    });

app.listen(8080, () => {
    console.log('Express Server listening on port 8080');
});

module.exports = mongoose;
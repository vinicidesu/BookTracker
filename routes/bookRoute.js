const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Book = require('../model/Book');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/book', async (req, res, next) => {
    try{
        const newBook = new Book();
        newBook.name = req.body.name;
        newBook.author = req.body.author;
        await newBook.save();
        res.json({ success: true, name: newBook.name});
} catch (err) {
    next (err);
}
});
module.exports = router;
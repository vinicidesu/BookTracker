const mongoose = require('mongoose');

const { Schema } = mongoose;
const BookSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    author: {
        type: String,
        unique: false,
        required: true
    }
}, {timestamps: true});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
import mongoose from "mongoose";

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
    },
    status:{
        type: Number,
        unique: false,
        required: true
    },
    nota:{
        type: Number,
        unique: false,
        required: false
    }    
}, {timestamps: true});

const Book = mongoose.model("Book", BookSchema);

export { Book };
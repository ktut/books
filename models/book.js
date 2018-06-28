const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    synopsis: String,
    date: { type: Date, default: Date.now()},
});

// Compile model from schema
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
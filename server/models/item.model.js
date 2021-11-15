const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    title: String,
    price: String,
    about: String,
    ratings: Number,
    brand: String,
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
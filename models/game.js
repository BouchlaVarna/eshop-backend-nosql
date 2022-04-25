const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: String,
    description: String,
    genre: [String],
    platform: String,
    price: Number,
    img: String
});

module.exports = mongoose.model('Game', gameSchema);
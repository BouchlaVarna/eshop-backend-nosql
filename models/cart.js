const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    items: [String]
})

module.exports = mongoose.model('Cart', cartSchema)
const mongoose = require('mongoose');
const Game = require('../models/game');
const Cart = require('../models/cart');

exports.postCart = async (req, res) => {
    let itemsArr = [];
    let i = 0;
    let cartArrLenght = 0;
    const cartId = req.body.cartId;
    const cart = await Cart.findById(cartId);
    
    cart.items.forEach(item => {
        cartArrLenght++;
    });

    cart.items.forEach(async (item) => {
        itemsArr.push(await Game.findById(item));
        i++;
        if(i == cartArrLenght) { 
            res.send(itemsArr);
        }
    });
}

exports.deleteItem = async (req, res) => {
    await Cart.updateOne(
        { _id: req.body.cartId },
        { $pull: { items: req.body.itemId } }
    )
}

exports.clearCart = async (req, res) => {
    await Cart.updateOne(
        { _id: req.body.cartId },
        { $set: { items: [] } }
    )
}
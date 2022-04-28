const mongoose = require('mongoose');
const Game = require('../models/game');
const Cart = require('../models/cart')

exports.getPlaystation = async (req, res) => {
    await Game.find({ 'platform': 'Playstation' }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }).clone()
}

exports.getXbox = async (req, res) => {
    await Game.find({ 'platform': 'XBOX' }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }).clone()
}

exports.getPC = async (req, res) => {
    await Game.find({ 'platform': 'PC' }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }).clone()
}

exports.getNintendo = async (req, res) => {
    await Game.find({ 'platform': 'Nintendo' }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }).clone()
}

exports.postCart = async (req, res) => {
    console.log(req.body.cartId)
    console.log(req.body.itemId)
    await Cart.updateOne(
        { _id: req.body.cartId },
        { $push: { items: req.body.itemId } }
    )
}
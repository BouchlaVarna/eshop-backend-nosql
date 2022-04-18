const mongoose = require('mongoose');
const Game = require('../models/game');

exports.getHome = async (req, res) => {
    /*
    try{
        const newGame = new Game({
            name: "Call of Duty 2",
            description: "Old historical shooter game",
            genre: ["action", "FPS"],
            platform: "PC",
            price: 1200
        });
        
        const game = await newGame.save();
        res.status(200).send({
            msg: "Successfull",
            game: game
        })
    }catch(err) {
        console.log(err)
    }
    */

    Game.find((err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }).limit(4);
}
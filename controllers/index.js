const mongoose = require('mongoose');
const Game = require('../models/game');
const Cart = require('../models/cart')


//GET
exports.getHome = async (req, res) => {
    /*
    try{
        const img = fs.readFileSync('./img/cs_cover.jpg');
        const encodeImg = img.toString('base64');
        const newGame = new Game({
            name: "Cities Skylines",
            description: "Very nice city building game",
            genre: ["City Builder", "Strategy"],
            platform: "PC",
            price: 600,
            img: ""
        });
        
        const game = await newGame.save();
    }catch(err) {
        console.log(err)
    }

    */ 
    await Game.find((err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }).limit(3).clone();
}

//POST
exports.postHome = async (req, res) => {
    const newCart = new Cart({
        items: []
    });

    const cart = await newCart.save();
    res.send(cart._id);
}
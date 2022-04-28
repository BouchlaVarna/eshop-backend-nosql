const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 3001;

const app = express();

//DB connection
mongoose.connect("mongodb+srv://admin:admin@main1db.vqmw4.mongodb.net/Main1DB?retryWrites=true&w=majority", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Route imports
const indexRouter = require('./routes/index');
const platformsRouter = require('./routes/platforms');
const cartRouter = require('./routes/cart');

//Middlewear
app.use(express.static('img'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

//Routes
app.use(indexRouter)
app.use(platformsRouter)
app.use('/cart', cartRouter)

app.listen(PORT);
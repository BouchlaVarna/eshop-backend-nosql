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
const indexRouter = require('./routes/index')

//Middlewear
app.use(express.static('img'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

//Routes
app.use(indexRouter)

app.listen(PORT);
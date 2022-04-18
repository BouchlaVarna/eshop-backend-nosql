const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const PORT = 3000;

const app = express();

//DB connection
mongoose.connect("", { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

//Route imports
const indexRouter = require('./routes/index')

//Middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(indexRouter)

app.listen(PORT);
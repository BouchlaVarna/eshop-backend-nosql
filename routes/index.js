const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

//GET
router.get('/', indexController.getHome);

//POST
router.post('/', indexController.postHome)
module.exports = router;

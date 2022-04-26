const express = require('express');
const router = express.Router();
const platformsCtrl = require('../controllers/platforms')

//GET
router.get('/playstation', platformsCtrl.getPlaystation);
router.get('/xbox', platformsCtrl.getXbox);
router.get('/pc', platformsCtrl.getPC);
router.get('/nintendo', platformsCtrl.getNintendo);

router.post('/playstation', platformsCtrl.postPlaystation);
//router.post('/xbox', platformsCtrl.postXbox);
//router.post('/pc', platformsCtrl.postPC);
//router.post('/nintendo', platformsCtrl.postNintendo);

module.exports = router;
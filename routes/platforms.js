const express = require('express');
const router = express.Router();
const platformsCtrl = require('../controllers/platforms')

//GET
router.get('/playstation', platformsCtrl.getPlaystation);
router.get('/xbox', platformsCtrl.getXbox);
router.get('/pc', platformsCtrl.getPC);
router.get('/nintendo', platformsCtrl.getNintendo);

router.post('/playstation', platformsCtrl.postCart);
router.post('/xbox', platformsCtrl.postCart);
router.post('/pc', platformsCtrl.postCart);
router.post('/nintendo', platformsCtrl.postCart);

module.exports = router;
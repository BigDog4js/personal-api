const express = require('express');
const router = express.Router();
const mainCtrl = require('../controllers/mainCtrl.js')

router.get('/', mainCtrl.getOccupations)
router.get('/latest', mainCtrl.getOccupationsLatest)
router.post('/', mainCtrl.postOccupations)

module.exports = router
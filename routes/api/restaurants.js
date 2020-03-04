const express = require('express');
const router = express.Router();
const restaurantsCtrl = require('../../controllers/restaurants');

router.post('/', restaurantsCtrl.create);

module.exports = router;


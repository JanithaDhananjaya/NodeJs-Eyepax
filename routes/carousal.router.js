const express = require('express');
const router = express.Router();
const callBack = require('../express-callback/index');
const {getSlides} = require('../controllers');

router.get('/', callBack(getSlides));

module.exports = router;

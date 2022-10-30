const express = require('express');
const carouselRouter = require('../routes/carousal.router');
const router = express.Router();

router.use('/api/carousel', carouselRouter);

module.exports = router;
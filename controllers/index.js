const usecases = require('../usecase');

const buildCarouselController = require('../controllers/carousel-controller');

module.exports.getSlides = buildCarouselController(usecases.getSlides);
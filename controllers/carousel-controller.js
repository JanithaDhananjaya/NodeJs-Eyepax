const debug = require('debug')('server:carousel');
const chalk = require('chalk');

module.exports = function carouselController(getSlides) {
    return async function getCarousel(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            let slides = httpRequest.query.slides;
            console.log(httpRequest)
            const response = await getSlides(slides);
            return {
                headers,
                statusCode: 200,
                body: response
            }
        } catch (e) {
            debug(chalk.red(e));
            return {
                headers,
                statusCode: 500,
                body: {
                    error: e.message
                }
            }
        }
    }
}

const debug = require('debug')('USE CASE:get-carousel');
const chalk = require('chalk');

module.exports = function buildGetCarousel() {
    return getSlides = async (slidesCount) => {
        console.log(slidesCount)
        let slides = [
            {
                image: 'https://www.wallpapertip.com/wmimgs/83-838296_web-designer-professional-website-background-images.jpg',
                title: 'Image 01',
                subTitle: 'Image 01 description'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg',
                title: 'Image 01',
                subTitle: 'Image 01 description'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg',
                title: 'Image 01',
                subTitle: 'Image 01 description'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_960_720.jpg',
                title: 'Image 01',
                subTitle: 'Image 01 description'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg',
                title: 'Image 01',
                subTitle: 'Image 01 description'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg',
                title: 'Image 01',
                subTitle: 'Image 01 description'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg',
                title: 'Image 01',
                subTitle: 'Image 01 description'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg',
                title: 'Image 01',
                subTitle: 'Image 01 description'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg',
                title: 'Image 01',
                subTitle: 'Image 01 description'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg',
                title: 'Image 01',
                subTitle: 'Image 01 description'
            }
        ];

        return slides.slice(0, slidesCount);

    }
};

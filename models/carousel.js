const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carouselSchema = new Schema({
    title: String,
    subTitle: String,
    image: String
});

module.exports = mongoose.model("Carousel", carouselSchema);
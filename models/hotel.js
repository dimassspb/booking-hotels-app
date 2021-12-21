const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    persons: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    rentperday: {
        type: Number,
        required: true,
    },
    img: [],
    currentbookings: [],
    services: [],
});

const hotelModel = mongoose.model('hotels', hotelSchema);

module.exports =hotelModel;

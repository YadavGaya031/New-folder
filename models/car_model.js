const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    model: String,
    brand: String,
    rent: Number,
    rating: Number,
});

module.exports = mongoose.model("user", carSchema);
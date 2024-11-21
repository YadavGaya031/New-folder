const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/NEW FOLDER");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isadmin: Boolean,
    contact: Number,
    dl: String,
    pickup_address: String,
    dropoff_address: String,
    Date: Number,
    time: Number,
    days: Number,
});

module.exports = mongoose.model("user",userSchema);
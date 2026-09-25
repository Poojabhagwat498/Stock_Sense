const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
    ticker: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    open: Number,
    high: Number,
    low: Number,
    close: Number,
    volume: Number
});

module.exports = mongoose.model("Stock", stockSchema);
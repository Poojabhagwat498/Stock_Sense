const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema({
    ticker: String,

    volatility: Number,

    maxDrawdown: Number,

    var95: Number,

    expectedShortfall: Number,

    shapFeatures: Array,

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model(
    "Analysis",
    analysisSchema
);
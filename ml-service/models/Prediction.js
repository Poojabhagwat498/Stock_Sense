const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema({
    ticker: String,

    prediction: String,

    probabilityUp: Number,

    probabilityDown: Number,

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model(
    "Prediction",
    predictionSchema
);
const {
    predictStock
} = require("../services/mlService");

const Prediction = require("../models/Prediction");


const getPrediction = async (req, res) => {

    try {

        const { ticker } = req.body;

        const result = await predictStock(ticker);

        const prediction =
            await Prediction.create({
                ticker: result.ticker,
                prediction: result.prediction,
                probabilityUp:
                    result.probability_up,
                probabilityDown:
                    result.probability_down
            });

        res.json(prediction);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


module.exports = {
    getPrediction
};
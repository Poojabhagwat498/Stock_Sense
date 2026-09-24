const axios = require("axios");

const ML_SERVICE_URL =
    process.env.ML_SERVICE_URL || "http://127.0.0.1:8000";


const predictStock = async (ticker) => {

    const response = await axios.post(
        `${ML_SERVICE_URL}/predict`,
        {
            ticker
        }
    );

    return response.data;
};


module.exports = {
    predictStock
};
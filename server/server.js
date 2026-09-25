const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

connectDB();

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const predictionRoutes =
    require("./routes/predictionRoutes");

app.use(
    "/api/predictions",
    predictionRoutes
);

app.get("/api/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Stock AI API is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

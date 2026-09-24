const predictionRoutes =
    require("./routes/predictionRoutes");

app.use(
    "/api/predictions",
    predictionRoutes
);
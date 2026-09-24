from fastapi import FastAPI

app = FastAPI(
    title="Explainable AI ML Service",
    version="1.0"
)


@app.get("/health")
def health():
    return {
        "status": "OK",
        "service": "Python ML Service"
    }


@app.post("/predict")
def predict(data: dict):

    ticker = data.get("ticker")

    return {
        "ticker": ticker,
        "prediction": "UP",
        "probability_up": 0.72,
        "probability_down": 0.28
    }
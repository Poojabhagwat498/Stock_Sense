"# Stock_Sense" 
explainable-ai-stock/
│
├── client/                         # React frontend
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── StockSearch.jsx
│   │   │   ├── StockHeader.jsx
│   │   │   ├── PriceChart.jsx
│   │   │   ├── PredictionCard.jsx
│   │   │   ├── SHAPChart.jsx
│   │   │   ├── FeatureImportance.jsx
│   │   │   ├── RiskCard.jsx
│   │   │   ├── RiskGauge.jsx
│   │   │   ├── MetricsCard.jsx
│   │   │   └── Loading.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Prediction.jsx
│   │   │   ├── Explainability.jsx
│   │   │   ├── RiskAssessment.jsx
│   │   │   └── About.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── stockApi.js
│   │   │
│   │   ├── context/
│   │   │   └── StockContext.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/                         # Node + Express backend
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── stockController.js
│   │   ├── predictionController.js
│   │   ├── riskController.js
│   │   └── explanationController.js
│   │
│   ├── models/
│   │   ├── Stock.js
│   │   ├── Prediction.js
│   │   └── Analysis.js
│   │
│   ├── routes/
│   │   ├── stockRoutes.js
│   │   ├── predictionRoutes.js
│   │   ├── riskRoutes.js
│   │   └── explanationRoutes.js
│   │
│   ├── services/
│   │   ├── marketDataService.js
│   │   └── mlService.js
│   │
│   ├── middleware/
│   │   └── errorMiddleware.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── ml-service/                     # Python ML + Explainable AI
│   ├── models/
│   │   ├── trend_xgb.joblib
│   │   ├── feature_columns.json
│   │   └── metrics.json
│   │
│   ├── app/
│   │   ├── main.py
│   │   ├── features.py
│   │   ├── predict.py
│   │   ├── explain.py
│   │   ├── risk.py
│   │   └── train.py
│   │
│   ├── requirements.txt
│   └── .env
│
├── data/
│   ├── raw/
│   └── processed/
│
├── notebooks/
│   ├── 01_data_analysis.ipynb
│   ├── 02_feature_engineering.ipynb
│   ├── 03_model_training.ipynb
│   └── 04_shap_analysis.ipynb
│
├── .gitignore
└── README.md

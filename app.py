from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route("/api/unemployment")
def unemployment_data():
    df = pd.read_csv("unemployment.csv")
    return (
        {
            "labels": df['Quarter'].tolist(),
            "data": df['Rate'].tolist()
        }
    )

@app.route("/api/inflation")
def inflation_data():
    df = pd.read_csv("inflation.csv")
    return(
        {
            "labels":df['Date'].tolist(),
            "data"  :df["Value"].tolist(),
        }
    )

@app.route("/api/gdp")
def gdp_data():
    df = pd.read_csv("GDP.csv")
    return({
        "labels": df["Data"].tolist(),
        "data"  :df["Value"].tolist()
    })


if __name__ == '__main__':
    app.run(debug=True)

    
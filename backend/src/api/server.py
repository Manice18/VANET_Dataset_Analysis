from src.models.vanet_prediction_system import VANETPredictionSystem
from fastapi import FastAPI, HTTPException
from src.schemas.schemas import attack_data_type
from src.utils.helpers import json_to_dataframe
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust this to your frontend's origin
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def home():
    return {"message": "Welcome to VANET Prediction System"}

@app.post("/api/predict-attack-type")
async def predict_attack_type(attack_data: attack_data_type):
    # print(attack_data.json())
    try:
        vanet_system = VANETPredictionSystem()
        input_data = json_to_dataframe(attack_data.dict())
        attack_type = vanet_system.predict_attack_type(input_data)

        return {"attack_type": str(attack_type)}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
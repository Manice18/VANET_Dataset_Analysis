from fastapi.testclient import TestClient
from src.api.server import app

client = TestClient(app)

# Sample JSON input data for testing the prediction endpoint
sample_attack_data = {
    "sendtime_1": 25203.933379168622,
    "sender_1": 175.0,
    "messageID": 207371.0,
    "pos_x1": 10442.946611577645,
    "pos_y1": 4363.958789850585,
    "pos_z1": 1.895,
    "spd_x1": -9.24283161477033,
    "spd_y1": -1.306535935041373,
    "spd_z1": 0.0,
    "sendtime_2": 25204.933379168622,
    "sender_2": 175.0,
    "pos_x2": 3928.647466506809,
    "pos_y2": 10084.960056585258,
    "pos_z2": 1.895,
    "spd_x2": -11.357475420629013,
    "spd_y2": -1.60545495005097,
    "spd_z2": 0.0
}

def test_home():
    """Test the home endpoint."""
    response = client.get("/")
    print("Home endpoint response:", response.json())
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to VANET Prediction System"}

def test_predict_attack_type_success():
    """Test the predict_attack_type endpoint with valid data."""
    response = client.post("/api/predict-attack-type", json=sample_attack_data)
    print("Predict attack type (valid data) response:", response.json())
    assert response.status_code == 200
    assert "attack_type" in response.json()  # Check if the response contains an "attack_type" key

def test_predict_attack_type_invalid_data():
    """Test the predict_attack_type endpoint with invalid data."""
    invalid_data = sample_attack_data.copy()
    invalid_data["sendtime_1"] = "invalid_value"  # Introduce an invalid value

    response = client.post("/api/predict-attack-type", json=invalid_data)
    print("Predict attack type (invalid data) response:", response.json())
    assert response.status_code == 422  # Unprocessable Entity
    assert "detail" in response.json()

    # Assert the structure and content of the validation error
    error_details = response.json()["detail"]
    assert isinstance(error_details, list)
    assert len(error_details) > 0
    assert error_details[0]["loc"] == ["body", "sendtime_1"]
    assert error_details[0]["msg"] == "Input should be a valid number, unable to parse string as a number"
    assert error_details[0]["type"] == "float_parsing"

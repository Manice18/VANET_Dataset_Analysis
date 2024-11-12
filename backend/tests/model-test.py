import pandas as pd
from src.models.vanet_prediction_system import VANETPredictionSystem

# Sample input data for testing attack type 4
input_data = pd.DataFrame([[25238.11193868895,1687.0,2006149.0,6557.816364426161,5864.31068105258,1.895,-0.640768619379338,6.050996793905487,0.0,25239.11193868895,1687.0,6557.332076450761,5869.003138026353,1.895,-0.37908407194232596,3.67309490920054,0.0]], columns=['sendtime_1', 'sender_1', 'messageID', 'pos-x1', 'pos-y1', 'pos-z1', 'spd-x1', 'spd-y1', 'spd-z1', 'sendtime_2', 'sender_2', 'pos-x2', 'pos-y2', 'pos-z2', 'spd-x2', 'spd-y2', 'spd-z2'])

# Instantiate the VANETPredictionSystem
vanet_system = VANETPredictionSystem()

# Predict the attack type
try:
    attack_type = vanet_system.predict_attack_type(input_data)
    print(f"Predicted Attack Type: {attack_type}")
except ValueError as e:
    print(f"Error: {e}")

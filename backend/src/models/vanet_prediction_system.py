import pickle

class VANETPredictionSystem:
    def __init__(self):
        # Load the scaler
        self.scaler = self.load_model('models/vanet_scaler.pkl')

        # Meta-classifier to predict the attack type
        self.attack_type_classifier = self.load_model('models/attack_type_classifier.pkl')

    def load_model(self, filename):
        """Utility function to load a model from a pickle file"""
        with open(filename, 'rb') as file:
            return pickle.load(file)

    def predict_attack_type(self, input_data):
        """Predicts the attack type using the meta-classifier"""
        # Remove 'AttackType' column if it exists in the input data
        if 'AttackType' in input_data.columns:
            input_data = input_data.drop(columns=['AttackType'])

        # Scale data
        scaled_data = self.scaler.transform(input_data)
        
        # Predict the attack type
        attack_type_pred = self.attack_type_classifier.predict(scaled_data)
        attack_type = attack_type_pred[0]

        return attack_type

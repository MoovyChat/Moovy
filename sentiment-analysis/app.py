import json
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
from detoxify import Detoxify

model = Detoxify('multilingual')

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    input_text = request.json['input_text']
    results = model.predict(input_text)

    # Convert float32 data types to float64 data types
    for key, value in results.items():
        if isinstance(value, np.float32):
            results[key] = np.float64(value)

    return json.dumps(results)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

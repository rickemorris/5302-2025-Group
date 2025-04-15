from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins='http://localhost:5173')

@app.route("/users", methods=['GET'])
def users():
    return jsonify(
       {
           "users": [
               'ricky',
               'robert',
               'jonathan',
               'skyla',
           ]
       } 
    )

if __name__ == "__main__":
    app.run(debug=True, port=8080)
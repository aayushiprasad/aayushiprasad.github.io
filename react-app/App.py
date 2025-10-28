from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/checkin/<projectId>/<int:qty>', methods=['GET'])
def checkIn(projectId, qty):
    return jsonify({"message": f"{qty} hardware checked in for {projectId}"})

@app.route('/checkout/<projectId>/<int:qty>', methods=['GET'])
def checkOut(projectId, qty):
    return jsonify({"message": f"{qty} hardware checked out for {projectId}"})

@app.route('/join/<projectId>', methods=['GET'])
def join(projectId):
    return jsonify({"message": f"Joined project {projectId}"})

@app.route('/leave/<projectId>', methods=['GET'])
def leave(projectId):
    return jsonify({"message": f"Left project {projectId}"})

if __name__ == '__main__':
    app.run(debug=True)

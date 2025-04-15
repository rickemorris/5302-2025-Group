from flask import Flask, request, jsonify
    import subprocess

    app = Flask(__name__)

    @app.route('/run_script', methods=['POST'])
    def run_script():
        data = request.get_json()
        script_name = data['script']
        try:
            result = subprocess.run(['python', script_name], capture_output=True, text=True, check=True)
            return jsonify({'output': result.stdout, 'error': result.stderr})
        except subprocess.CalledProcessError as e:
             return jsonify({'output': e.stdout, 'error': e.stderr}), 500

    if __name__ == '__main__':
        app.run(debug=True)
import React, { useState, useEffect } from 'react';
import axios from "axios";

    function App() {
        const [output, setOutput] = useState('');
        const [array, setArray] = useState([]);
        const [error, setError] = useState('');
        const [scriptName, setScriptName] = useState('adoption.py'); // Default script name

        const fetchAPI = async () => {
            const response=await axios.get("http://127.0.0.1:8080/users");
            console.log(response.data.users);
            setArray(response.data.users);
        };

        useEffect(() => {
            fetchAPI();
        }, []);



        async function runPythonScript() {
            try {
                const response = await fetch('http://localhost:5173/run_script', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ script: scriptName }),
                });

                const data = await response.json();
                if (response.ok) {
                    setOutput(data.output);
                    setError('');
                } else {
                    setError(data.error);
                    setOutput('');
                }
            } catch (err) {
                setError(err.message);
                setOutput('');
            }
        }

        return (
            <div>
            {
                array.map((user, index) => (
                    <div key={index}>
                    <span>{user}</span>
                    <br></br>
                    </div>
                ))}
                <input
                    type="text"
                    value={scriptName}
                    onChange={(e) => setScriptName(e.target.value)}
                    placeholder="Enter script name"
                />
                <button onClick={runPythonScript}>Run Python Script</button>
                {output && <pre>Output: {output}</pre>}
                {error && <pre className="error">Error: {error}</pre>}
                
            </div>
          
        );
    }

    export default App;
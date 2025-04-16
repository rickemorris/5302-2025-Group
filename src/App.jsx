import React, { useState, useEffect } from 'react';
import axios from "axios";

    function App() {
        const [output, setOutput] = useState('');
        const [array, setArray] = useState([]);
        const [error, setError] = useState('');
        const fetchAPI = async () => {
            const response=await axios.get("http://127.0.0.1:8080/scrape");
            console.log(response.data.pets);
            setArray(response.data.pets);
        };

        useEffect(() => {
            fetchAPI();
        }, []);

        return (
            <div>
            {
                array.map((pets, index) => (
                    <div key={index}>
                    <span>{pets}</span>
                    <br></br>
                    </div>
                ))}
                Test
            </div>

        );
    }

    export default App;
import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/scrape")
      .then((res) => res.json())
      .then((data) => {
        setPets(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching pets:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Houston SPCA Pets</h1>

      {loading ? (
        <p className="text-center">Loading pets...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pets.map((pet, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="h-[140px] w-auto object-contain"
                style={{ maxHeight: "260px", maxWidth: "100%" }}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{pet.name}</h2>
                <p className="text-sm text-gray-600">{pet.breed}</p>
                <p className="text-sm text-gray-500">Weight: {pet.weight}</p>
                <a
                  href={pet.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
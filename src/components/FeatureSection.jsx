import React, { useState, useEffect } from 'react';
 
function App() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch("http://127.0.0.1:8080/scrape")
      .then((res) => res.json())
      .then((data) => {
        // Filter pets to remove any with unknown name or missing image
        const validPets = data.filter(
          pet =>
            pet.name &&
            pet.name.toLowerCase() !== "unknown" &&
            pet.image &&
            pet.image.trim() !== ""
        );
        setPets(validPets);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching pets:", err);
        setLoading(false);
      });
  }, []);
 
  return (
    <div className="min-h-screen bg-gray p-6" id="hero">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange">Houston SPCA Pets Available</h1>
 
      {loading ? (
        <p className="text-center text-black">Loading pets...</p>
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
                <h2 className="text-xl font-semibold text-black">{pet.name}</h2>
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

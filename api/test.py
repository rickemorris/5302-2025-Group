from flask import Flask, jsonify, render_template
from flask_cors import CORS
import importlib
import requests
from bs4 import BeautifulSoup
import json
from urllib.parse import urljoin



app = Flask(__name__)
cors = CORS(app, origins='http://localhost:5173')

@app.route("/scrape", methods=['GET'])
def fetch_houston_spca_pets():
    url = "https://houstonspca.org/available-pets/"  # Houston SPCA Website
    headers = {"User-Agent": "Mozilla/5.0"}
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, "html.parser")
        pet_elements = soup.select(".pet-card")
        
        pets = []
        for pet in pet_elements:
            link = pet["href"] if "href" in pet.attrs else ""
            link = urljoin(url, link)  # Ensure the full URL is used for the pet link
            
            name = pet.select_one(".pet-card__title").text.strip() if pet.select_one(".pet-card__title") else "Unknown"
            breed = pet.select_one(".pet-card__text-row").text.strip() if pet.select_one(".pet-card__text-row") else "Unknown"
            image = pet.select_one("img")["src"] if pet.select_one("img") else ""
            image = urljoin(url, image)  # Ensure the full URL is used for the image
            
            # Extract weight from the div containing <b>Weight:</b> and <span>
            weight = "Unknown"
            weight_element = pet.select_one(".pet-card__text-row b:contains('Weight:') + span")
            if weight_element:
                weight = weight_element.text.strip()
            
            pets.append({
                "name": name,
                "breed": breed,
                "image": image,
                "link": link,
                "weight": weight  # Add weight to the pet data
            })
        
        return json.dumps(pets, indent=4)
    except requests.RequestException as e:
        return json.dumps({"error": str(e)})
    
@app.route("/")
def home():
 pets = fetch_houston_spca_pets()
 return render_template("./index.html")

if __name__ == "__main__":
    app.run(debug=True, port=8080)
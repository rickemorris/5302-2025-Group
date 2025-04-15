import requests
from bs4 import BeautifulSoup
import json

def fetch_houston_spca_pets():
    url = "https://www.houstonspca.org/adopt/available-pets"  # Example URL
    headers = {"User-Agent": "Mozilla/5.0"}
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, "html.parser")
        pet_elements = soup.select(".pet-card")  # Adjust selector based on website structure
        
        pets = []
        for pet in pet_elements:
            name = pet.select_one(".pet-name").text.strip() if pet.select_one(".pet-name") else "Unknown"
            breed = pet.select_one(".pet-breed").text.strip() if pet.select_one(".pet-breed") else "Unknown"
            age = pet.select_one(".pet-age").text.strip() if pet.select_one(".pet-age") else "Unknown"
            image = pet.select_one("img")["src"] if pet.select_one("img") else ""
            link = pet.select_one("a")["href"] if pet.select_one("a") else ""
            
            pets.append({
                "name": name,
                "breed": breed,
                "age": age,
                "image": image,
                "link": link
            })
        
        return json.dumps(pets, indent=4)
    except requests.RequestException as e:
        return json.dumps({"error": str(e)})

if __name__ == "__main__":
    print(fetch_houston_spca_pets())

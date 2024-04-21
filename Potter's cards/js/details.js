const params = new URLSearchParams(window.location.search);
const cardId = params.get("id");

async function fetchCard(id) {
  const url = `https://hp-api.lainocs.fr/characters/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  displayCard(data);
}

function displayCard(card) {
  const template = document.getElementById("card-details");

  
  template.querySelector(".card-image").src = card.image;
  template.querySelector(".card-name").textContent = card.name;
  template.querySelector(".card-actor").textContent = card.actor + " (acteur)";
  template.querySelector(".card-house").textContent = "Maison : " + card.house;
  template.querySelector(".card-wand").textContent = "Baguette magique : " + card.wand;
  template.querySelector(".card-role").textContent = "Statut : " + card.role;

  if (card.house == "") {
    template.querySelector(".card-wand").textContent = "Maison : N/A";
  }
  if (card.wand == "") {
    template.querySelector(".card-wand").textContent = "Baguette magique : N/A";
  }
  if (card.role == "") {
    template.querySelector(".card-wand").textContent = "Statut : N/A";
  }
}

fetchCard(cardId);

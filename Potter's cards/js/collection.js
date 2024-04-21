



/*
if (localStorage.status_connected == "false") {
    document.getElementById("div_unconnected").style.display = "flex"
}
*/

let ownedDecoupe = localStorage.owned.slice(1)
ownedDecoupe = ownedDecoupe.slice(0, -1)
ownedDecoupe = ownedDecoupe.split(',')

if (ownedDecoupe.length > 1) {
    for (let i = 0; i < ownedDecoupe.length; i++) {
        // numCarte = ownedDecoupe[i]
        // let createDiv = document.createElement("div")
        // document.body.querySelector("main").appendChild(createDiv)
        // createDiv.classList.add('owned_cards_divs')

        // createDiv.id = numCarte
        // createDiv.style.backgroundImage = "url(images/cartes/" + numCarte + ".png"

        
    }

    async function fetchCards() {
        const url = `https://hp-api.lainocs.fr/characters`;
        const response = await fetch(url);
        const data = await response.json();
        displayCards(data);
      }
  
      function displayCards(cards) {
    
        cards.forEach((card) => {
            ownedDecoupe.forEach((e) => {
                if (e == card.id) {
                    let createDiv = document.createElement("div")
                    document.body.querySelector("main").appendChild(createDiv)
                    createDiv.classList.add('owned_cards_divs')


                    let createLink = document.createElement("a")
                    createDiv.appendChild(createLink)
                    createLink.classList.add("owned_cards_link")
                    createLink.href = `details.html?id=${card.slug}`
                    createLink.textContent="détails"

                    
                    createDiv.style.backgroundImage = `url(${card.image})`
                }
                
            })
            
            
        });
    }

    fetchCards();
}

if (ownedDecoupe.length < 5) {
    document.querySelector("main").style.height = "80vh"
}

// Vider la collection
document.getElementById("delete_cards_button").addEventListener("click", () => {
    localStorage.owned = []
    alert("Vos cartes ont bien été supprimées")
    location.reload()
})

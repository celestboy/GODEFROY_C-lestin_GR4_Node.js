openBooster = document.getElementById("open_booster_btn")

let ownedArray = localStorage.getItem("owned")
ownedArray = [ownedArray]

boostersDispoSpan = document.getElementById("boosters_dispo_span")
let boostersDispo = 1
let collectedCards = []



openBoosterBtn = document.getElementById("open_booster_btn")


// document.getElementById("username_span_accueil").textContent = localStorage.pseudo


boostersDispoSpan.textContent = boostersDispo


function openBoosterBtnActivated() {
    if (boostersDispo == 0) {
        openBoosterBtn.style.background = "rgba(80, 80, 80, 0.7)"
        openBoosterBtn.style.color = "rgb(50, 50, 50)"
        openBoosterBtn.textContent = "Indisponible"
    }
}



/*
if (localStorage.status_connected == "false") {
    document.getElementById("div_unconnected").style.display = "flex"
}
*/



    // algorythme booster
    

function getRandom(nbCartes) {
    nbCartes = 20
    let nbChoisi
    nbCartesRares = 0
    cartesDejaPrises = []
    for (let i = 0; i < 5; i++) {
        nbChoisi = Math.round(Math.random() * (nbCartes - 1) + 1)

        if(nbChoisi > 15) {
            nbCartesRares++

            if (cartesDejaPrises.includes(nbChoisi)) {
                while (cartesDejaPrises.includes(nbChoisi)) {
                    nbChoisi = Math.round(Math.random() * (nbCartes - 1) + 1)
                }
            }

            cartesDejaPrises.push(nbChoisi)

            deck.push(nbChoisi)
            if (nbCartesRares > 0) {
                nbCartes = 15
            }
        }
        else {
            if (cartesDejaPrises.includes(nbChoisi)) {
                while (cartesDejaPrises.includes(nbChoisi)) {
                    nbChoisi = Math.round(Math.random() * (nbCartes - 1) + 1)
                }
            }
            cartesDejaPrises.push(nbChoisi)
            deck.push(nbChoisi)
        }
    }

    if (!localStorage.owned) {
        localStorage.setItem("owned", JSON.stringify(deck));
    } else {
        let ownedCards = JSON.parse(localStorage.getItem("owned"));
        if (!Array.isArray(ownedCards)) {
            localStorage.setItem("owned", JSON.stringify(deck));
        } else {
            ownedCards = ownedCards.concat(deck.filter(card => !ownedCards.includes(card)));
            localStorage.setItem("owned", JSON.stringify(ownedCards));
        }
    }


    
} 


openBooster.addEventListener("click", () => {
    if (boostersDispo > 0) {
        deck = []
        getRandom()
        boostersDispo = 0
        openBoosterBtnActivated()

        document.querySelector("swiper-container").style.display = "flex"

        for (let i = 0; i < deck.length; i++) {
            let swiperContainerCreator = document.createElement("swiper-slide")
            document.querySelector("swiper-container").appendChild(swiperContainerCreator)
    
            let imgSwiperCreator = document.createElement("img")
            swiperContainerCreator.appendChild(imgSwiperCreator)
    
            let closeSwiperText = document.createElement("p")
            swiperContainerCreator.appendChild(closeSwiperText)
            closeSwiperText.classList.add("close_swiper_text")
            closeSwiperText.textContent = "fermer"
    
            // imgSwiperCreator.src = "images/cartes/" + deck[i] + ".png"

            
            async function fetchCards() {
                const url = `https://hp-api.lainocs.fr/characters`;
                const response = await fetch(url);
                const data = await response.json();
                displayCards(data);
              }
          
              function displayCards(cards) {
            
                cards.forEach((card) => {
                    numCarte = deck[i]
                    if (card.id == numCarte) {
                        imgSwiperCreator.src = card.image
                    }
                });
            }

            fetchCards();
    
            closeSwiperText.addEventListener("click", () => {
                document.querySelector("swiper-container").style.display = "none"
                
            })
        }
    }
    else {
        alert("vous n'avez plus de boosters disponibles!")
    }
    boostersDispoSpan.textContent = boostersDispo


    
})



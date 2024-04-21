
aDisconnect = document.getElementById("a_disconnect")
navLi = document.querySelectorAll("nav li")
iconsId = document.getElementById("icons")
nav = document.querySelector("nav")


    // BOUTON DECONNECTION

/*
aDisconnect.addEventListener("click", () => {
    localStorage.setItem("status_connected", false)
})
*/

    // MENU BURGER

iconsId.addEventListener("click", () => {
    nav.classList.toggle("active")
})

navLi.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active")
    })
})
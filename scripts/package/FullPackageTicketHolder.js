const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("fullPackTicketSelected", customEvent => {
    fullPackageTicket()
})

const fullPackageTicket = () => {
    const rideTarget = document.querySelector(".rides")
    const foodTarget = document.querySelector(".food")
    const gamesTarget = document.querySelector(".games")
    const sideshowTarget = document.querySelector(".sideshow")
    rideTarget.innerHTML += `<div class="person bigSpender"></div>`
    foodTarget.innerHTML += `<div class="person bigSpender"></div>`
    gamesTarget.innerHTML += `<div class="person bigSpender"></div>`
    sideshowTarget.innerHTML += `<div class="person bigSpender"></div>`
}
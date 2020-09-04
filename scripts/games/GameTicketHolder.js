const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("gamesTicketSelected", customEvent => {
    GamesTicketHolders()
})


export const GamesTicketHolders = () => {
    contentTarget.innerHTML += `
    <div class="person player"></div>
    `
}
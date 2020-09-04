const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("sideshowTicketSelected", customEvent => {
    SideshowTicketHolders()
})


export const SideshowTicketHolders = () => {
    contentTarget.innerHTML += `
    <div class="person gawker"></div>
    `
}
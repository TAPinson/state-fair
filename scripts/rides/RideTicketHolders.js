const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("rideTicketSelected", customEvent => {
    RideTicketHolders()
})


export const RideTicketHolders = () => {
    contentTarget.innerHTML += `
    <div class="person rider"></div>
    `
}


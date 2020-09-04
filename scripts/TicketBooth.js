const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener('click', event => {
    // Retrieve ID of clicked element
    const rideSelected = event.target.id
    // Only continue if the clicked element was the "Ride Ticket" button
    if (rideSelected === "rideTicket") {
        //console.log("Button successfully clicked")
        const rideEvent = new CustomEvent("activitySelected", {
            detail: {
              activity: rideSelected
            }
        })
        eventHub.dispatchEvent(rideEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}


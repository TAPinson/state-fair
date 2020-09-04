const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

// Listen for the Ride Ticket button to be clicked
eventHub.addEventListener('click', event => {
    // Retrieve ID of clicked element
    const rideSelected = event.target.id
    // Only continue if the clicked element was the "Ride Ticket" button
    if (rideSelected === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketSelected", {
            detail: {
              activity: rideSelected
            }
        })
        eventHub.dispatchEvent(rideEvent)
    }
})


// Listen for the Food Ticket button to be clicked
eventHub.addEventListener('click', event => {
    // Retrieve ID of clicked element
    const foodSelected = event.target.id
    // Only continue if the clicked element was the "Food Ticket" button
    if (foodSelected === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketSelected", {
            detail: {
                activity: foodSelected
            }
        })
        eventHub.dispatchEvent(foodEvent)
    }
})


// Listen for the Games Ticket button to be clicked
eventHub.addEventListener('click', event => {
    // Retrieve ID of clicked element
    const gamesSelected = event.target.id
    // Only continue if the clicked element was the "Food Ticket" button
    if (gamesSelected === "gamesTicket") {
        const gamesEvent = new CustomEvent("gamesTicketSelected", {
            detail: {
                activity: gamesSelected
            }
        })
        eventHub.dispatchEvent(gamesEvent)
    }
})


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gamesTicket">Games Ticket</button>
        </div>
        
    `
}


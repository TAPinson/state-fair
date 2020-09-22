const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")
const ticketDisplay = document.querySelector(".totalTickets")
let tickets = 0

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
        ticketCounter()
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
        ticketCounter()
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
        ticketCounter()
        eventHub.dispatchEvent(gamesEvent)
    }
})


// Listen for the Sideshow Ticket button to be clicked
eventHub.addEventListener('click', event => {
    // Retrieve ID of clicked element
    const sideshowSelected = event.target.id
    // Only continue if the clicked element was the "Food Ticket" button
    if (sideshowSelected === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketSelected", {
            detail: {
                activity: sideshowSelected
            }
        })
        ticketCounter()
        eventHub.dispatchEvent(sideshowEvent)
    }
})


// Listen for the Full Package Ticket button to be clicked
eventHub.addEventListener('click', event => {
    const fullPackageSelected = event.target.id
    if (fullPackageSelected === "fullPackageTicket") {
        const fullPackage = new CustomEvent("fullPackTicketSelected", {
            detail: {
                activity: fullPackageSelected
            }
        })
        ticketCounter()
        eventHub.dispatchEvent(fullPackage)
    }
})


// Increment tickets purchased by 1 and render new total to the DOM
const ticketCounter = () => {
    tickets++
    console.log(tickets)
    ticketDisplay.innerHTML = ""
    ticketDisplay.innerHTML = `Total Tickets Purchased = ${tickets}`

}

// Render the Ticket Booth Buttons
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gamesTicket">Games Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
        
    `
}


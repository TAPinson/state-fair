const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("activitySelected", customEvent => {
    console.log("Its been dispatched!")
    RideTicketHolders()
})


export const RideTicketHolders = () => {
    contentTarget.innerHTML += `
    <div class="person rider"></div>
    `
}


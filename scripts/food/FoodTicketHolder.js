const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("foodTicketSelected", customEvent => {
    FoodTicketHolders()
})


export const FoodTicketHolders = () => {
    contentTarget.innerHTML += `
    <div class="person eater"></div>
    `
}


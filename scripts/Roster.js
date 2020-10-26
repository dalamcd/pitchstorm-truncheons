const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", e => {
    if (e.target.id === "create__player") {
        const playerFirst = document.getElementById("first__name")
        const playerLast = document.getElementById("last__name")
        const playerCountry = document.getElementById("country__origin")
        const playerTransmitter = new CustomEvent("createPlayer", {
            detail: {
                firstName: playerFirst.value,
                lastName: playerLast.value,
                countryOfOrigin: playerCountry.value
            }
        })
    eventHub.dispatchEvent(playerTransmitter)
    }

})

export const addPlayerCreator = () => {
    eventHub.addEventListener("createPlayer", e => {
    const player = e.detail
    savePlayer(player)
})
}

export const savePlayer = player => {
    return fetch('http://localhost:8088/players', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(player)
    })
}
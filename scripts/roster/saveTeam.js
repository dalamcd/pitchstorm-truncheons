import { getTeams } from "../teams/TeamProvider.js"

// this is the custom listener that will create a new event.
const dispatchStateChangeEvent = () => {
    const teamStateChangedEvent = new CustomEvent("teamStateChanged")
    eventHub.dispatchEvent(teamStateChangedEvent)
}

// this is the save state stuff they told us to memorize
export const saveTeam = (teams) => {
    return fetch("http://localhost:8088/teams", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(teams),
    })
        .then(getTeams)
        .then(dispatchStateChangeEvent)
}
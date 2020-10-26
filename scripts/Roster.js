import { getTeams } from "./teams/TeamProvider.js"
import { TeamSelect } from "./teams/TeamSelect.js"
const eventHub = document.querySelector(".container")
// create an event listener for the button
eventHub.addEventListener("click", (click) => {
  // if the click happens on the add team button get the value inside the text box
  if (click.target.id === "addTeam__button") {
    const TeamName = document.querySelector("#addTeam__text").value
    console.log("team name", TeamName)
    const timeStamp = Date.now()
    // put the text into a new team with the timestamp
    const newTeam = {
      name: TeamName,
      creationDate: timeStamp,
    }
    saveTeam(newTeam)
  }
})
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

TeamSelect()

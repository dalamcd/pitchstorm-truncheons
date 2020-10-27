import { getTeams, useTeams } from "./TeamProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#team-select-dropdown")

eventHub.addEventListener("change", (event) => {
  if (event.target.id === "team-select-dropdown") {
    const customEvent = new CustomEvent("rosterTeamSelected", {
      detail: {
        teamId: parseInt(event.target.value),
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})

export const TeamSelect = () => {
  return getTeams().then(() => {
    const teamArray = useTeams()
    render(teamArray)
  })
}

const render = (collection) => {
  contentTarget.innerHTML += collection.map(
    (team) => `<option value="${team.id}">${team.name}</option> `
  )
}

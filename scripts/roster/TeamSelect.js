import { getTeams, useTeams } from "../teams/TeamProvider.js"

const eventHub = document.querySelector(".container")

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
  const contentTarget = document.querySelector("#team-select-dropdown")
  contentTarget.innerHTML += collection.map(
    (team) => `<option value="${team.id}">${team.name}</option> `
  )
}

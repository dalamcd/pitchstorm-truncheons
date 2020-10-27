import { getPlayers, usePlayers } from "./players/PlayerProvider.js"
import { getTeams } from "./teams/TeamProvider.js"
import { TeamSelect } from "./teams/TeamSelect.js"

const eventHub = document.querySelector(".container");

eventHub.addEventListener("rosterTeamSelected", e => {
    playerMenus(e.detail.teamID);
})

export const playerMenus = (teamID) => {

    const playerOne = document.querySelector(".manageRoster__Team__playerOne");
    const playerTwo = document.querySelector(".manageRoster__Team__playerTwo");
    const playerThree = document.querySelector(".manageRoster__Team__playerThree");

    getPlayers().then(() => {
        const playerList = usePlayers();
        const teamPlayers = playerList.map(player => { player.teamID == teamID });

        playerOneHTML = `<option value=${teamPlayers[0].id}>${teamPlayers[0].firstName} 
        ${teamPlayers[0].lastName}</option>`
        playerTwoHTML = `<option value=${teamPlayers[1].id}>${teamPlayers[1].firstName} 
        ${teamPlayers[1].lastName}</option>`
        playerThreeHTML = `<option value=${teamPlayers[2].id}>${teamPlayers[2].firstName} 
        ${teamPlayers[2].lastName}</option>`

        playerOneHTML += playerList.map(player => {
            if (player.id != teamPlayers[0].id)
                return `<option value=${player.id}>${player.firstName} ${player.lastName}</option>`
        })
        playerTwoHTML += playerList.map(player => {
            if (player.id != teamPlayers[1].id)
                return `<option value=${player.id}>${player.firstName} ${player.lastName}</option>`
        })
        playerThreeHTML += playerList.map(player => {
            if (player.id != teamPlayers[2].id)
                return `<option value=${player.id}>${player.firstName} ${player.lastName}</option>`
        })

        playerOne.innerHTML = playerOneHTML;
        playerTwo.innerHTML = playerTwoHTML;
        playerThree.innerHTML = playerThreeHTML;
    })
}

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

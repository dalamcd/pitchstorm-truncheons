import { saveTeam } from "./saveTeam.js"
import { playerMenus } from "./PlayerMenus.js"
import { modifyTeam } from "./modifyTeam.js";
import { useTeams } from "../teams/TeamProvider.js"

const eventHub = document.querySelector(".container");

// Add event listener for when the team is changed
export const addListeners = () => { 
    eventHub.addEventListener("rosterTeamSelected", e => {
    // Call playerMenu, passing in the ID of the selected team.
    playerMenus(e.detail.teamId);
})

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

    if(click.target.id === "manageRoster__Team__modifyTeam"){

        const teamObj = {
            teamId: useTeams().find(
                team => team.id === parseInt(document.querySelector("#team-select-dropdown").value)).id,
            pOneId: parseInt(document.querySelector("#manageRoster__Team__playerOne").value),
            pTwoId: parseInt(document.querySelector("#manageRoster__Team__playerTwo").value),
            pThreeId: parseInt(document.querySelector("#manageRoster__Team__playerThree").value)
        }

        modifyTeam(teamObj);
    }
})

}
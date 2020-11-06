import { getPlayers, usePlayers } from "../players/PlayerProvider.js"
import { useTeams } from "../teams/TeamProvider.js"

const eventHub = document.querySelector(".container");

// TODO: The roster loads with a team already selected, need to make sure to populate
//       the drop down menus with whatever team is initially selected.
export const playerMenus = (teamID) => {
    // Get references to the DOM elements of the three players.
    const playerOne = document.querySelector("#manageRoster__Team__playerOne");
    const playerTwo = document.querySelector("#manageRoster__Team__playerTwo");
    const playerThree = document.querySelector("#manageRoster__Team__playerThree");

    getPlayers().then(() => {
        // Get full list of players.
        let playerList = usePlayers();
        // Look through the list of players and pick out only the players that are on the
        // selected team.
        const teamPlayers = playerList.filter(player => player.teamID === teamID)
        // Set up the drop down menus, with the first automatically selected option
        // being the players on the team.
        let playerOneHTML;
        let playerTwoHTML;
        let playerThreeHTML;

        // If they exist, add the first player on the team to the dropdown, 
        if (teamPlayers[0]) {
            playerOneHTML = `<option value=${teamPlayers[0].id}>${teamPlayers[0].firstName} 
            ${teamPlayers[0].lastName}</option>`
            playerList = playerList.filter(player => player.id !== teamPlayers[0].id)
        }
        else
            playerOneHTML = `<option value=0>No player selected</option>`

        if (teamPlayers[1]) {
            playerTwoHTML = `<option value=${teamPlayers[1].id}>${teamPlayers[1].firstName} 
            ${teamPlayers[1].lastName}</option>`
            playerList = playerList.filter(player => player.id !== teamPlayers[1].id)
        }
        else
            playerTwoHTML = `<option value=0>No player selected</option>`

        if (teamPlayers[2]) {
            playerThreeHTML = `<option value=${teamPlayers[2].id}>${teamPlayers[2].firstName} 
            ${teamPlayers[2].lastName}</option>`
            playerList = playerList.filter(player => player.id !== teamPlayers[2].id)
        }
        else
            playerThreeHTML = `<option value=0>No player selected</option>`

        // Add the rest of the players to each drop down menu.
        playerOneHTML += playerList.map(player => {
            const playerTeam = useTeams().find(team => team.id === player.teamID)
            return `<option value=${player.id}>${player.firstName} ${player.lastName},
            ${playerTeam ? playerTeam.name : `No team assigned`}</option>`
        })
        playerTwoHTML += playerList.map(player => {
            const playerTeam = useTeams().find(team => team.id === player.teamID)
            return `<option value=${player.id}>${player.firstName} ${player.lastName},
            ${playerTeam ? playerTeam.name : `No team assigned`}</option>`
        })
        playerThreeHTML += playerList.map(player => {
            const playerTeam = useTeams().find(team => team.id === player.teamID)
            return `<option value=${player.id}>${player.firstName} ${player.lastName},
            ${playerTeam ? playerTeam.name : `No team assigned`}</option>`
        })

        // Add the HTML to the DOM.
        playerOne.innerHTML = playerOneHTML;
        playerTwo.innerHTML = playerTwoHTML;
        playerThree.innerHTML = playerThreeHTML;
    })
}

eventHub.addEventListener("teamDropdownStateChanged", e => {
    playerMenus(e.detail.teamID);
})
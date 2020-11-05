import { getPlayers, usePlayers } from "../players/PlayerProvider.js"

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
        console.log(teamPlayers);
        // Set up the drop down menus, with the first automatically selected option
        // being the players on the team.
        let playerOneHTML;
        let playerTwoHTML;
        let playerThreeHTML;

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

        // Add the rest of the players to each drop down menu, making sure that we don't
        // add the players that we started with in each one.
        playerOneHTML += playerList.map(player => {
                return `<option value=${player.id}>${player.firstName} ${player.lastName}</option>`
        })
        playerTwoHTML += playerList.map(player => {
                return `<option value=${player.id}>${player.firstName} ${player.lastName}</option>`
        })
        playerThreeHTML += playerList.map(player => {
                return `<option value=${player.id}>${player.firstName} ${player.lastName}</option>`
        })

        // Add the HTML to the DOM.
        playerOne.innerHTML = playerOneHTML;
        playerTwo.innerHTML = playerTwoHTML;
        playerThree.innerHTML = playerThreeHTML;
    })
}
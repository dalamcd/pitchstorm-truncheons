import { getPlayers, usePlayers } from "./players/PlayerProvider.js"

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
        const teamPlayers = playerList.map(player => {player.teamID == teamID});

        playerOneHTML = `<option value=${teamPlayers[0].id}>${teamPlayers[0].firstName} 
        ${teamPlayers[0].lastName}</option>`
        playerTwoHTML = `<option value=${teamPlayers[1].id}>${teamPlayers[1].firstName} 
        ${teamPlayers[1].lastName}</option>`
        playerThreeHTML = `<option value=${teamPlayers[2].id}>${teamPlayers[2].firstName} 
        ${teamPlayers[2].lastName}</option>`

        playerOneHTML += playerList.map(player => {
            if(player.id != teamPlayers[0].id)
                return `<option value=${player.id}>${player.firstName} ${player.lastName}</option>`
        })
        playerTwoHTML += playerList.map(player => {
            if(player.id != teamPlayers[1].id)
                return `<option value=${player.id}>${player.firstName} ${player.lastName}</option>`
        })
        playerThreeHTML += playerList.map(player => {
            if(player.id != teamPlayers[2].id)
                return `<option value=${player.id}>${player.firstName} ${player.lastName}</option>`
        })

        playerOne.innerHTML = playerOneHTML;
        playerTwo.innerHTML = playerTwoHTML;
        playerThree.innerHTML = playerThreeHTML;
    })
}
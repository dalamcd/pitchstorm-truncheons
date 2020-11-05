import { getPlayers, usePlayers } from "../players/PlayerProvider.js";
import { getTeams, useTeams } from "../teams/TeamProvider.js";

const eventHub = document.querySelector(".container");

export const changePlayerTeam = (playerID, teamID) => {

    getPlayers().then(() => {
        const player = usePlayers().find(playerObj => playerObj.id === playerID);
        player.teamID = teamID;

        return fetch(`http://localhost:8088/players/${player.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(player)
        });
    });
}

export const modifyTeam = () => {
    //debugger
    getTeams().then(() => {
        const teamID = useTeams().find(
            team => team.id === parseInt(document.querySelector("#team-select-dropdown").value)).id;

        const playerOne = parseInt(document.querySelector("#manageRoster__Team__playerOne").value);
        const playerTwo = parseInt(document.querySelector("#manageRoster__Team__playerTwo").value);
        const playerThree = parseInt(document.querySelector("#manageRoster__Team__playerThree").value);

        changePlayerTeam(playerOne, teamID);
        changePlayerTeam(playerTwo, teamID);
        changePlayerTeam(playerThree, teamID);
    })
}

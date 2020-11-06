import { getPlayers, usePlayers } from "../players/PlayerProvider.js";
import { getTeams, useTeams } from "../teams/TeamProvider.js";

const eventHub = document.querySelector(".container");

export const changePlayerTeam = (playerID, teamID) => {

    return getPlayers().then(() => {
        const player = usePlayers().find(playerObj => playerObj.id === playerID);
        if (player) {
            player.teamID = teamID;

            return fetch(`http://localhost:8088/players/${player.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(player)
            });
        }
    });
}

export const modifyTeam = (teamObj) => {
    getTeams().then(() => {

        let promiseChain = [];
        //debugger
        promiseChain.push(changePlayerTeam(teamObj.pOneId, teamObj.teamId));
        promiseChain.push(changePlayerTeam(teamObj.pTwoId, teamObj.teamId));
        promiseChain.push(changePlayerTeam(teamObj.pThreeId, teamObj.teamId));

        usePlayers().forEach(player => {
            if (player.id !== teamObj.pOneId && player.id !== teamObj.pTwoId && player.id !== teamObj.pThreeId) {
                if (player.teamID === teamObj.teamId) {
                    promiseChain.push(changePlayerTeam(player.id, 0));
                }
            }
        });
        Promise.all(promiseChain)
            .then(() => {
                eventHub.dispatchEvent(new CustomEvent("teamDropdownStateChanged", {
                    detail: {
                        teamID: teamObj.teamId
                    }
                }));
            })
    });
}

const eventHub=document.querySelector(".container")
import { renderRoster } from "../scripts/Roster.js";
import { LeaderboardList} from "../scripts/leaderboard/LeaderboardList.js"
import { gamePlayList } from "../GamePlay/GamePlayList.js";
// this exports all the event listeners to the main.js
export const homePageClickEvents = () => {
    eventHub.addEventListener("chosenRoster", customEvent => {
        renderRoster()
      
    })
    eventHub.addEventListener("chosenLeaderboard", customEvent => {
        LeaderboardList()
    })
    eventHub.addEventListener("chosenGamePlay", customEvent => {
        gamePlayList()
    })
}

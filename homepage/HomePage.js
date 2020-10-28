const eventHub=document.querySelector(".container")
import { renderRoster } from "../scripts/Roster.js";
// this exports all the event listeners to the main.js
export const homePageClickEvents = () => {
    eventHub.addEventListener("chosenRoster", customEvent => {
        renderRoster()
      
    })
}

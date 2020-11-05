const contentTarget=document.querySelector(".container")
const eventHub=document.querySelector(".container")

export const homePageList=()=>{
    // display the roster
    const homePageHTML=render()
    contentTarget.innerHTML=homePageHTML

    // create an event listener for the roster
    eventHub.addEventListener("click", event => {
        if (event.target.id === "homePageButton__roster") {
            const rosterClickEvent = new CustomEvent("chosenRoster", {
            })
            eventHub.dispatchEvent(rosterClickEvent)
        }

        else if (event.target.id === "homePageButton__leaderboard") {
                const leaderboardClickEvent = new CustomEvent("chosenLeaderboard", {
                })
                console.log("click")
                eventHub.dispatchEvent(leaderboardClickEvent)
        }
    })
}

const render=()=>{
    return `
    <button class=homePageButton id=homePageButton__roster>Roster</button>
    <button class=homePageButton id=homePageButton__gamePlay>Play Game</button>
    <button class=homePageButton id=homePageButton__leaderboard>LeaderBoard</button>

    `
}

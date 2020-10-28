import { getScores, useScores } from "../score/ScoreProvider.js"
import { getTeams, useTeams } from "../teams/TeamProvider.js"
import { LeaderboardRow } from "./LeaderboardRow.js"

const contentTarget = document.querySelector(".container")

export const LeaderboardList = () => {
  //   const teamsCollection = () => {
  //     return getTeams().then(() => {
  //       const teamArray = useTeams()
  //       console.log(teamArray)
  //       return teamArray
  //     })
  //   }

  //   const scoresCollection = () => {
  //     return getScores().then(() => {
  //       const scoresArray = useScores()
  //       console.log(scoresArray)
  //       return scoresArray
  //     })
  //   }
  //   const teamArray = teamsCollection()
  //   const scoresArray = scoresCollection()
  render()
}

const render = () => {
  const counter = 1
  contentTarget.innerHTML = `
   <header>Leaderboard</header>
  
   <div class="row"> 
       <p>1</p>
       <p>Dragons</p>
       <p>34</p>
    </div>
    <div class="row"> 
    <p>2</p>
    <p>Frogs</p>
    <p>33</p>
 </div>
 <div class="row"> 
    <p>3</p>
    <p>SANDWICHES</p>
    <p>32</p>
 </div>
   `
}

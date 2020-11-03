import { getScores, useScores } from "../score/ScoreProvider.js"
import { getTeams, useTeams } from "../teams/TeamProvider.js"
import { leaderboardObject } from "./LeaderboardProvider.js"
import { LeaderboardRow } from "./LeaderboardRow.js"

const contentTarget = document.querySelector(".container")

export async function LeaderboardList() {
  const teamRaw = await getTeams()
  const teamArray = await useTeams()
  const scoresRaw = await getScores()
  const scoresArray = await useScores()

  let leaderboardArray = leaderboardObject(teamArray, scoresArray)
  render()
  renderColumns(leaderboardArray)
}

const render = () => {
  contentTarget.innerHTML = `
  <header>Leaderboard</header>
  <section class="mainContainer">
  <div class="leaderboardContainer">
     <div class="leaderboard__titles">
       <p class="leaderboard__title__rank">Rank</p>
       <p class="leaderboard__title__team">Team</p>
       <p class="leaderboard__title__score">Score</p>
     </div> 
     <div class="leaderboard__columns">
     <div class="leaderboard__rank"></div>
     <div class="leaderboard__team"></div>
     <div class="leaderboard__score"></div>
     </div>
  </div>
  </section>
  `
}

const renderColumns = (arr) => {
  const rank = document.querySelector(".leaderboard__rank")
  let counter = 0
  arr.map((teamObj) => {
    counter++
    rank.innerHTML += `<p>${counter}</p>`
    LeaderboardRow(teamObj)
  })
}

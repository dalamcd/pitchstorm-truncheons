import { getScores, useScores } from "../score/ScoreProvider.js"
import { getTeams, useTeams } from "../teams/TeamProvider.js"
import { leaderboardObject } from "./LeaderboardCalculator.js"
import { LeaderboardRow } from "./LeaderboardRow.js"

const contentTarget = document.querySelector(".container")

// Fetches and returns team array and score array. .Then it calls the rendering of the static HTML and the dynamic html.

export const LeaderboardList = () => {
  let teamArray = []
  let scoresArray = []

  getTeams()
    .then(() => {
      teamArray = useTeams()
    })
    .then(() => getScores())
    .then(() => {
      scoresArray = useScores()
    })
    .then(() => {
      let leaderboardArray = leaderboardObject(teamArray, scoresArray)
      render()
      renderColumns(leaderboardArray)
    })
}

// Leaderboard display.

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

// Renders the rank column using the counter variable and incrementing every iteration. Renders the Team and Score columns data by using the LeaderboardRow.js function and the object provided by LeaderboardProvider.js.

const renderColumns = (arr) => {
  const rank = document.querySelector(".leaderboard__rank")
  let counter = 0
  arr.map((teamObj) => {
    counter++
    rank.innerHTML += `<p>${counter}</p>
    <div class="divider"></div>
    `
    LeaderboardRow(teamObj)
  })
}

import { getScores, useScores } from "../score/ScoreProvider.js"
import { getTeams, useTeams } from "../teams/TeamProvider.js"
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

const leaderboardObject = (arrayOfTeams, arrayOfScores) => {
  const teamObjects = arrayOfTeams.map(function (team) {
    return { "name": team.name, "score": scoreCalc(team, arrayOfScores) }
  })
  return teamObjects.sort((a, b) => b.score - a.score)
}

const scoreCalc = (team, scoresArray) => {
  const scoresObject = scoresArray
    .filter((score) => score.teamID === team.id)
    .map((teamScore) => teamScore.score)
    .reduce((a, b) => a + b, 0)
  return scoresObject
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

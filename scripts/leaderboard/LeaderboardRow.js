import {} from "./LeaderboardList.js"

export const LeaderboardRow = (rowObj) => {
  const { name, score } = rowObj

  const team = document.querySelector(".leaderboard__team")
  const totalScore = document.querySelector(".leaderboard__score")

  // Populates the team name htlm.

  team.innerHTML += `<p>${name}</p>
  <div class="divider"></div>
  `

  // Populates the team score htlm.

  totalScore.innerHTML += `<p>${score}</p>
  <div class="divider"></div>
  `
}

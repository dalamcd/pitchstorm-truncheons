import {} from "./LeaderboardList.js"

export const LeaderboardRow = (rowObj) => {
  const { name, score } = rowObj

  const team = document.querySelector(".leaderboard__team")
  const totalScore = document.querySelector(".leaderboard__score")

  team.innerHTML += `<p>${name}</p>`

  totalScore.innerHTML += `<p>${score}</p>`
}

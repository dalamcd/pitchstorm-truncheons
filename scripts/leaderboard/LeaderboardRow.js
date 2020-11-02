import { getTeams } from "../teams/TeamProvider"

export const LeaderboardRow = (rowObj) => {
  const { name, score } = rowObj
  counter++

  rank.innerHTML += counter

  getTeams.innerHTML += name

  score.innerHTML += totalScore
}

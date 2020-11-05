// This funcition takes the array of teams and the array of scores and maps them into an array of objects. It uses the scoreCalc fucnction to get the combined scores.

export const leaderboardObject = (arrayOfTeams, arrayOfScores) => {
  const teamObjects = arrayOfTeams.map(function (team) {
    return { "name": team.name, "score": scoreCalc(team, arrayOfScores) }
  })
  return teamObjects.sort((a, b) => b.score - a.score)
}

// filters the score array to only look at the team being iterated over in the leaderboard map. Then it maps the scores from that array and reduce totales them.
const scoreCalc = (team, scoresArray) => {
  const scoresObject = scoresArray
    .filter((score) => score.teamID === team.id)
    // Refactor to remove .map
    .map((teamScore) => teamScore.score)
    .reduce((a, b) => a + b, 0)
  return scoresObject
}

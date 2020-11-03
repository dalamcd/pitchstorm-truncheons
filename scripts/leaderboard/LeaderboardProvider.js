export const leaderboardObject = (arrayOfTeams, arrayOfScores) => {
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

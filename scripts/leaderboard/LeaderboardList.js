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
 render(leaderboardArray)
}

const leaderboardObject = (arrayOfTeams, arrayOfScores) => {
  const teamObjects = arrayOfTeams.map(function (team) { return {"name": team.name, "score": scoreCalc(team, arrayOfScores)}})
  return teamObjects.sort((a, b) => b.score - a.score)
}

const scoreCalc = (team, scoresArray) => {
  const scoresObject = scoresArray
  .filter(score => score.teamID === team.id).map((teamScore) => teamScore.score)
  .reduce((a ,b) => a+b,0)
  return scoresObject
}

const render = (arrayOfTeams) => {
  let counter = 1
  contentTarget.innerHTML = `
  <header>Leaderboard</header>
  <section class="mainContainer">
  <div class="leaderboardContainer">
  ${arrayOfTeams.map(team => `<div class="leaderboardHTML">
  <p class="leaderBox">Rank: ${counter++}</p>
  <p class="leaderBox">Team: ${team.name}</p>
  <p class="leaderBox">Total Points: ${team.score}</p>
  </div>
  `).join(" ")} 
  </div>
  </section>
  `
}

// export const LeaderboardList = () => {
  //     return getTeams().then(() => {
  //       const teamArray = useTeams()
  //       //   console.log(teamArray)
  //       return teamArray
  //     })
  //   }

  //   const scoresCollection = () => {
  //     return getScores().then(() => {
  //       const scoresArray = useScores()
  //       //   console.log(scoresArray)
  //       return scoresArray
  //     })
  //   }
  //   const teamsArray = teamsCollection()
  //   const scoreArray = scoresCollection()

  //   console.log("Var for func tcollection", teamsArray)
  //   console.log("Var for func tcollection", scoreArray)
  

  // const teamArray = [
  //   {
  //     "id": 1,
  //     "name": "The Pitchstorm Progamers",
  //     "creationDate": "10/23/2020",
  //   },
  //   {
  //     "name": "The Green Dragons",
  //     "creationDate": 1603744783654,
  //     "id": 2,
  //   },
  //   {
  //     "name": "New Team",
  //     "creationDate": 1603812636231,
  //     "id": 3,
  //   }
  // ]

  // const scoresArray = [
  //   {
  //     "teamID": 2,
  //     "score": 1,
  //     "dateOfGame": "10/23/2020",
  //   },
  //   {
  //     "teamID": 1,
  //     "score": 14,
  //     "dateOfGame": "10/23/2020",
  //   },
    
  //   {
  //     "teamID": 1,
  //     "score": 13,
  //     "dateOfGame": "10/23/2020",
  //   },
  //   {
  //     "teamID": 1,
  //     "score": 6,
  //     "dateOfGame": "10/23/2020",
  //   }
  // ]

// }





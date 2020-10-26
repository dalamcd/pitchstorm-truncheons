import { getTeams, useTeams } from "./teams/TeamProvider.js"
import './Roster.js'

console.log("Welcome to the main module")
getTeams().then(()=>
console.log(useTeams()))

import { usePlayers, getPlayers } from "./players/PlayerProvider.js"

console.log("Welcome to the main module")
getPlayers().then(()=>
console.log(usePlayers()))
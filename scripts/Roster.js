import { addListeners } from "./roster/addListeners.js"
import { addPlayerCreator } from "./roster/addPlayer.js"
import { TeamSelect } from "./roster/TeamSelect.js"
import {RosterList} from './roster/DisplayingTheRoster.js'

export const renderRoster = () => {
    RosterList()
    addListeners()
    TeamSelect()
    addPlayerCreator()
    
}

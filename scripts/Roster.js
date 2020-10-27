import { addListeners } from "./roster/addListeners.js"
import { addPlayerCreator } from "./roster/addPlayer.js"
import { TeamSelect } from "./roster/TeamSelect.js"

export const renderRoster = () => {
    addListeners()
    TeamSelect()
    addPlayerCreator()
}

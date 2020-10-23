let players=[]

export const usePlayers=()=>{
    return players.slice()
}

export const getPlayers=()=>{
    return fetch("http://localhost:8088/players")
    .then(response=>response.json())
    .then(parsedPlayers=>{
        players=parsedPlayers
    })
}
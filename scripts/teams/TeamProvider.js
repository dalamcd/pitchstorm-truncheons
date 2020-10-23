let teams=[]

export const useTeams=()=>{
    return teams.slice()
}

export const getTeams=()=>{
    return fetch("http://localhost:8088/teams")
    .then(response=>response.json())
    .then(parsedTeams=>{
        teams=parsedTeams
    })
}
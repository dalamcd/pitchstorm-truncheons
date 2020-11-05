let scores = []

export const useScores = () => {
  return [...scores]
}

export const getScores = () => {
  return fetch("http://localhost:8088/teamScores")
    .then((response) => response.json())
    .then((parsedScores) => {
      scores = parsedScores
    })
}

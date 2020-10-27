export const LeaderboardRow = (rowBob, position) => {
  const { name, score } = rowObj

  return `
    <div class="row"> 
       <p>${posiiton}</p>
       <p>${name}</p>
       <p>${score}</p>
    </div>
    `
}

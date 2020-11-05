const contentTarget=document.querySelector(".container")
export const gamePlayList=()=>{
    render()

}

const render = () => {
    contentTarget.innerHTML = `
    <header>Leaderboard</header>
    <navbar class=navBarHome>
    <button class=homePageButton id=homePageButton__roster>Roster</button>
    <button class=homePageButton id=homePageButton__gamePlay>Play Game</button>
    <button class=homePageButton id=homePageButton__leaderboard>LeaderBoard</button>
    </navbar>
    <section class="mainContainer">
    <div class="leaderboardContainer">
       <div class="leaderboard__titles">
         <p class="leaderboard__title__rank">Rank</p>
         <p class="leaderboard__title__team">Team</p>
         <p class="leaderboard__title__score">Score</p>
         <p class="leaderboard__title__score">Score</p>

       </div> 
       <div class="leaderboard__columns">
       <div class="leaderboard__rank">this should be a dropdown</div>
       <div class="leaderboard__team">This should be teams</div>
       <div class="leaderboard__score">this should be input scores</div>
       <div class="leaderboard__score">this should be total scores</div>
       </div>
    </div>
    </section>
    `
  }
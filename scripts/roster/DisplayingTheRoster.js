import { playerMenus } from "./PlayerMenus.js"

// select the main part of the index.html
const contentTarget = document.querySelector(".container")

// following the pattern we have learned before
export const RosterList = () => {
  const rosterHTML = render()
  contentTarget.innerHTML = rosterHTML
  playerMenus(1);

}
// returning the html
const render = () => {
  return `
  
   <header>Manage Roster</header>
   <navbar class=navBarHome>
   <button class=homePageButton id=homePageButton__roster>Roster</button>
   <button class=homePageButton id=homePageButton__gamePlay>Play Game</button>
   <button class=homePageButton id=homePageButton__leaderboard>LeaderBoard</button>
   </navbar>
   <div class="formContainer">
   <section class="manageRoster__Select">
     <h3>Add Team</h3>
     <input id="addTeam__text" type="text" />
     <button id="addTeam__button" class="btn">Submit</button>
     <h3>Select Team</h3>
     <select name="team-select" id="team-select-dropdown"></select>
   </section>
   <section class="manageRoster__Team">
     <h2 class="manageRoster__Team__title">Orks</h2>
     <label for="">Player 1</label>
     <select id="manageRoster__Team__playerOne"></select>
     <label for="">Player 2</label>
     <select id="manageRoster__Team__playerTwo"></select>
     <label for="">Player 3</label>
     <select id="manageRoster__Team__playerThree"></select>
     <button id="manageRoster__Team__modifyTeam">Save Changes</button>
   </section>
   <section class="manageRoster__Player">
     <h3>Add Player</h3>
     <input type="text" value="First Name" id="first__name"/>
     <input type="text" value ="Last Name" id="last__name"/>
     <input type="text" value ="Country of Origin" id="country__origin"/>
     <button class="btn" id="create__player">Submit</button>
     <h3>Delete Player</h3>
     <input type="text" />
     <button class="btn">Submit</button>
   </section>
   </div>
   `
}

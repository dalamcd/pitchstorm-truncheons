const contentTarget=document.querySelector(".container")
export const gamePlayList=()=>{
    render()

}

const render = () => {
    contentTarget.innerHTML = `
    <header>Truncheons and Flagons</header>
    <navbar class=navBarHome>
    <button class=homePageButton id=homePageButton__roster>Roster</button>
    <button class=homePageButton id=homePageButton__gamePlay>Play Game</button>
    <button class=homePageButton id=homePageButton__leaderboard>LeaderBoard</button>
    </navbar>
    <div class=GamePlayTable>
    <table border="1">
<tbody>
<tr>
<th>blah</th>
<th>blah;</th>
<th>blah;</th>
<th>blah;</th>
</tr>
<tr>
<td>blah</td>
<td>blah;</td>
<td>blah;</td>
<td>blah;</td>
</tr>
<tr>
<td>blah</td>
<td>blah;</td>
<td>blah;</td>
<td>blah;</td>
</tr>
<tr>
<td>blah</td>
<td>blah;</td>
<td>blah;</td>
<td>blah;</td>
</tr>
</tbody>
</table>
</div>
    `
  }
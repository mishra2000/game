document.turn=1
document.countStep=0
document.flag=false
function mark(elem){
  if(document.turn==1){
    elem.innerHTML="X"
    document.turn=2
    document.getElementById("showTurn1").style.visibility="hidden"
    document.getElementById("showTurn2").style.visibility="visible"

  }
  else{
    elem.innerHTML="O"
    document.turn=1
    document.getElementById("showTurn2").style.visibility="hidden"
    document.getElementById("showTurn1").style.visibility="visible"
  }
elem.style="pointer-events:none"
document.countStep=document.countStep+1
if(document.countStep>=5)
  checkWinner()
}
function checkWinner()
{
  g1=document.getElementById("g1")
  g2=document.getElementById("g2")
  g3=document.getElementById("g3")
  g4=document.getElementById("g4")
  g5=document.getElementById("g5")
  g6=document.getElementById("g6")
  g7=document.getElementById("g7")
  g8=document.getElementById("g8")
  g9=document.getElementById("g9")
//horizontal check
  if(g1.innerHTML==g2.innerHTML && g2.innerHTML==g3.innerHTML && g3.innerHTML=="X") showWinner("X",g1,g2,g3,[g4,g5,g6,g7,g8,g9])
  if(g1.innerHTML==g2.innerHTML && g2.innerHTML==g3.innerHTML && g3.innerHTML=="O") showWinner("Y",g1,g2,g3,[g4,g5,g6,g7,g8,g9])

  if(g4.innerHTML==g5.innerHTML && g5.innerHTML==g6.innerHTML && g6.innerHTML=="X") showWinner("X",g4,g5,g6,[g1,g2,g3,g7,g8,g9])
  if(g4.innerHTML==g5.innerHTML && g5.innerHTML==g6.innerHTML && g6.innerHTML=="O") showWinner("Y",g4,g5,g6,[g1,g2,g3,g7,g8,g9])

  if(g7.innerHTML==g8.innerHTML && g8.innerHTML==g9.innerHTML && g9.innerHTML=="X") showWinner("X",g7,g8,g9,[g1,g2,g3,g4,g5,g6])
  if(g7.innerHTML==g8.innerHTML && g8.innerHTML==g9.innerHTML && g9.innerHTML=="O") showWinner("Y",g7,g8,g9,[g1,g2,g3,g4,g5,g6])

//vertical check
  if(g1.innerHTML==g4.innerHTML && g4.innerHTML==g7.innerHTML && g7.innerHTML=="X") showWinner("X",g1,g4,g7,[g2,g3,g5,g6,g8,g9])
  if(g1.innerHTML==g4.innerHTML && g4.innerHTML==g7.innerHTML && g7.innerHTML=="O") showWinner("Y",g1,g4,g7,[g2,g3,g5,g6,g8,g9])

  if(g2.innerHTML==g5.innerHTML && g5.innerHTML==g8.innerHTML && g8.innerHTML=="X") showWinner("X",g2,g5,g8,[g1,g3,g4,g6,g7,g9])
  if(g2.innerHTML==g5.innerHTML && g5.innerHTML==g8.innerHTML && g8.innerHTML=="O") showWinner("Y",g2,g5,g8,[g1,g3,g4,g6,g7,g9])

  if(g3.innerHTML==g6.innerHTML && g6.innerHTML==g9.innerHTML && g9.innerHTML=="X") showWinner("X",g3,g6,g9,[g1,g2,g4,g5,g7,g8])
  if(g3.innerHTML==g6.innerHTML && g6.innerHTML==g9.innerHTML && g9.innerHTML=="O") showWinner("Y",g3,g6,g9,[g1,g2,g4,g5,g7,g8])

//diagonal check
  if(g1.innerHTML==g5.innerHTML && g5.innerHTML==g9.innerHTML && g9.innerHTML=="X") showWinner("X",g1,g5,g9,[g2,g3,g4,g6,g7,g8])
  if(g1.innerHTML==g5.innerHTML && g5.innerHTML==g9.innerHTML && g9.innerHTML=="O") showWinner("Y",g1,g5,g9,[g2,g3,g4,g6,g7,g8])

  if(g3.innerHTML==g5.innerHTML && g5.innerHTML==g7.innerHTML && g7.innerHTML=="X") showWinner("X",g3,g5,g7,[g1,g2,g4,g6,g8,g9])
  if(g3.innerHTML==g5.innerHTML && g5.innerHTML==g7.innerHTML && g7.innerHTML=="O") showWinner("Y",g3,g5,g7,[g1,g2,g4,g6,g8,g9])

  if(document.countStep==9 && document.flag==false)
    document.getElementById("result").innerHTML="Match Draw"
}
function showWinner(player,c1,c2,c3,freezeCols)
{
  document.flag=true
  if(player=="X")
    player=1
  else
    player=2
  document.getElementById("result").innerHTML="Player "+player+" is the winner"
  c1.style="background:green"
  c2.style="background:green"
  c3.style="background:green"

  for(i=0;i<freezeCols.length;i++)
    freezeCols[i].style="pointer-events:none"
}
function resetGame()
{
window.location.reload();
}

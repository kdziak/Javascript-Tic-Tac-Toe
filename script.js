const playerOne = "X"
const playerTwo = "O"

const restartButton = document.getElementById('restartButton')
const title = document.getElementById('title')
let currentPlayer = playerOne
let spaces = Array(9).fill(null)
let boxes = Array.from(document.getElementsByClassName('box'))
const winningCombos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]

const playerFactory = (name, peice) => {
  const sayName = () => console.log(name);
  const sayPeice = () => console.log(peice);
  return {name, peice, sayName, sayPeice};
};

const kian = playerFactory('kian', 'x');



const p1name = kian.name;
document.getElementById('name').innerHTML = p1name;

const startGame = () => {
  boxes.forEach(box => box.addEventListener('click', clickedBox))
}


function clickedBox(e) {
  const id = e.target.id

  if (!spaces[id]){
      spaces[id] = currentPlayer
      console.log(spaces)
      e.target.innerText = currentPlayer

      if(draw() == true){
        title.textContent = 'Cats Game!'
      }

      if(playerHasWon() !== false){
        title.textContent = `${currentPlayer}'s have won!`
        let winner = playerHasWon()
        winner.map(box => boxes[box].style.background = 'red')
      }
      currentPlayer = currentPlayer == playerOne ? playerTwo : playerOne
  }
}


function playerHasWon(){
  for (const condition of winningCombos) {
    let [a,b,c] = condition

    if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c]))
      return [a,b,c]
  }
  return false
}


restartButton.addEventListener('click', restartGame)

function restartGame() {
  spaces.fill(null)
  boxes.forEach(box => {
    box.innerText = ""
    
  })
  
  currentPlayer = playerOne
  title.textContent = 'Tic-Tac-Toe'
}

function draw(){
  if (spaces.includes(null)){
    return false
  } else {
    return true
  }
}

startGame()



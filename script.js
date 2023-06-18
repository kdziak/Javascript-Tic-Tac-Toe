const playerOne = "X"
const playerTwo = "O"
const playerOneName = ""
const playerTwoName = ""
const winnerColor = getComputedStyle(document.body).getPropertyValue('--winner-color')

const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');
const modal = document.querySelector('.modal')

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

openModal.addEventListener('click', () => {
  modal.showModal();
})

closeModal.addEventListener('click', () => {
  modal.close();
})

// const p1name = kian.name;
// document.getElementById('name').innerHTML = p1name;

closeModal.addEventListener('click', () => {
  let playerOneName = document.getElementById("playerOneName").value;
  let playerTwoName = document.getElementById("playerTwoName").value;
  document.getElementById('nameOne').innerText = playerOneName
  document.getElementById('nameTwo').innerText = playerTwoName
  console.log(playerOneName)
  console.log(playerTwoName)
})

const startGame = () => {
  boxes.forEach(box => box.addEventListener('click', clickedBox))
}


function clickedBox(e) {
  const id = e.target.id

  if (!spaces[id]){
      spaces[id] = currentPlayer
      console.log(spaces)
      e.target.innerText = currentPlayer
      // testing animation
      e.target.classList.add(currentPlayer)
      if(draw() == true){
        title.textContent = 'Cats Game!'
      }

      if(playerHasWon() !== false){
        title.textContent = `${currentPlayer}'s have won!`
        let winner = playerHasWon()
        winner.map(box => boxes[box].style.backgroundColor = winnerColor)
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
    box.style.backgroundColor = ''
    box.classList.remove('X')
    box.classList.remove('O')
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


// const playerFactory = (name, peice) => {
//   const sayName = () => console.log(name);
//   const sayPeice = () => console.log(peice);
//   return {name, peice, sayName, sayPeice};
// };

// const kian = playerFactory('kian', 'x');

// const p1name = kian.name;
// document.getElementById('name').innerHTML = p1name;
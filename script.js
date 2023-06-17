
const playerOne = "X"
const playerTwo = "O"

let currentPlayer = playerOne
let spaces = Array(9).fill(null)
let boxes = Array.from(document.getElementsByClassName('box'))

const playerFactory = (name, peice) => {
  const sayName = () => console.log(name);
  const sayPeice = () => console.log(peice);
  return {name, peice, sayName, sayPeice};
};

const kian = playerFactory('kian', 'x');

kian.sayName();
kian.sayPeice();


const gameBoard = (() => {
  const boardArray = [1, 2, 3 ,4 ,5, 6 ,7, 8, 9];
  return {
    boardArray
  };
})();

const p1name = kian.name;
document.getElementById('name').innerHTML = p1name;

const startGame = () => {
  boxes.forEach(box => box.addEventListener('click', clickedBox))
}


function clickedBox(e) {
  id = e.target.id

  if (!spaces[id]){
      spaces[id] = currentPlayer
      e.target.innerText = currentPlayer

      currentPlayer = currentPlayer == playerOne ? playerTwo : playerOne
  }
}

startGame()



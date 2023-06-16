let turn = 0

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


const box = document.querySelectorAll(".box").forEach(item => {
  item.addEventListener('click', function (e) {
    turn++
    item.innerHTML = peicePicker(turn)
    //e.target.style.background = "blue"
  })
})
  

function peicePicker(turn) {
  if (turn % 2 == 0) {
    return "O";
  } else {
    return "X";
  }
}



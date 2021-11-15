
const winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]


let currentTurn = 1;
let gameActive = true;
const finishGame = false;
const playerX = "X";
const playerY = "Y";
const cells = document.querySelectorAll("[cell]");
const newGameButton = document.getElementById('newGame')
const board = document.getElementById('board')



newGameButton.addEventListener("click", newGame);

function newGame (){
    gameActive = false;
    cells.forEach(cell => {
        cell.classList.remove(playerX);
        cell.classList.remove(playerY);
        cell.removeEventListener(click, handleClick)
        cell.addEventListener("click", handleClick) //---introducir once --//)
    })
}

function handleClick(cell){
    const space = cell.target;

}



/* let board = [
    [undefined,undefined,undefined],
    [undefined,undefined,undefined],
    [undefined,undefined,undefined]
] */



/*Mensaje de cambio de turno*/

let message = document.querySelector(".section-game")
message.innerHTML += '<p class="changeTurn">Le toca al siguiente jugador</p>';


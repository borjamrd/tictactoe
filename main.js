
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
const allCells = document.querySelectorAll("[cell]");
const newGameButton = document.getElementById("newGame");
const board = document.getElementById("board");
const message = document.getElementById("message")


newGameButton.addEventListener("click", newGame);

function checkWin(currentClass) {
    return winComb.some(combination => {
      return combination.every(index => {
        return cells[index].classList.contains(currentClass)
      })
    })
  }

function newGame (){
    gameActive = false;
    cells.forEach(cell => {
        cell.classList.remove(playerX);
        cell.classList.remove(playerY);
        cell.removeEventListener(click, handleClick)
        cell.addEventListener("click", handleClick) //---introducir once --//)
    })
    setBoardHoverClass()
  message.classList.remove('show')
}

function handleClick(event){
    const cell = event.target;
    const currentClass = playerX ? gameActive: playerY;
    putMarkonCell(cell, currentClass)
        if(checkWin(currentClass)){
            console.log("Juego finalizado"); //*generar texto para mostrar cambio de turno*//
        }else{
            changeTurn()
        }

}

function engGame(draw){
    if(draw){
        message.innerHTML = "Draw"
    } else {
        message.innerHTML = `${gameActive ? "O" : "X"} wins!`
    }
    message.classList.add("show")
}

function isDraw(){
    return[...allCells].every(cell =>{
        return cell.classList.contains(playerX) || cell.classList.contains(playerY);
    })
}

function  putMarkonCell(cell, currentClass) {
    cell.classList.add(currentClass)
  }
function changeTurn(){
    gameActive =! gameActive;
}

function setBoardHoverClass(){
    board.classList.remove(playerX);
    board.classList.remove(playerY);
    if (gameActive) {
        board.classList.add(playerY)
      } else {
        board.classList.add(playerX)
      }

}

/* 
let message = document.querySelector(".section-game")
message.innerHTML += '<p class="changeTurn">Le toca al siguiente jugador</p>';

 */
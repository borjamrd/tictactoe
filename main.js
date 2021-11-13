

let currentTurn = 1;

let board = [
    [undefined,undefined,undefined],
    [undefined,undefined,undefined],
    [undefined,undefined,undefined]
]

function move(row, column){
    console.log(board[row,column])

}


/*Mensaje de cambio de turno*/

let message = document.querySelector(".section-game")
message.innerHTML += '<p class="changeTurn">Le toca al siguiente jugador</p>';

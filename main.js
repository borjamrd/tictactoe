/*
Se define un currentArray que almacenará las jugadas (currentArray). Se declaran las combinaciones ganadoras (winComb).
se activará la function finalGame cuando:
.currentArray sea igual a cualquiera de las winComb.

El juego
comienza con el jugador X (function addX):
Cambia el valor del botón seleccionado.
Almacena el valor en currentArray

Se activa la función changeTurn que lo que har


*/

let winComb = [
    [0,1,2]
    [2,1,0]
    [3,4,5]
    [5,4,3]
    [6,7,8]
    [8,7,6]
    [0,3,6]
    [6,3,0]
    [1,4,7]
    [7,4,1]
    [2,5,8]
    [8,5,2]
    [0,4,8]
    [8,4,2]
    [6,4,2]
    [2,4,6]
]

let spaceX = "X";
let spaceY = "Y";
let yTurn;

let buttons = document.querySelectorAll("button")
buttons.forEach(button=>{
    button.addEventListener("click", handleClick,{once: true})
    
})
function handleClick(e) {
    let button = e.target
    let currentClass = yTurn? spaceX : spaceY; 
    addXY(button, currentClass)
    changeTurn();
    
}
function addXY(button, currentClass){
    button.innerHTML = "X";
    button.classList.add(currentClass)
}

function changeTurn(){
    yTurn = !yTurn;
}

/*Mensaje de cambio de turno*/

let message = document.querySelector(".section-game")
message.innerHTML += '<p class="changeTurn">Le toca al siguiente jugador</p>';

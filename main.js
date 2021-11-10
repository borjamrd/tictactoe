

/*---Turno al jugador X---*/


function prueba(){
    let message = document.querySelector(".section-game")
    message.innerHTML += '<p class="changeTurn">Le toca al siguiente jugador</p>';
     
}
cell = document.querySelectorAll("#game .spaceX");
Array.from(cell).forEach(function(button){
    button.addEventListener("click",function(e){
        button.innerHTML = "X";
   })
   document.getElementsByTagName("button").setAttributte("class", "spaceY") 
})


/*---Turno al jugador Y ---*/

cell = document.querySelectorAll("button");

Array.from(cell).forEach(function(button){
    button.addEventListener("click",function(e){
        button.innerHTML = "Y"
    })
})


/*Mensaje de cambio de turno*/

let message = document.querySelector(".section-game")
message.innerHTML += '<p class="changeTurn">Le toca al siguiente jugador</p>';

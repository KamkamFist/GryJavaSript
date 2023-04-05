//plansza
 var rozmiarBloku = 25;
 var wiersze = 20;
 var kolumny = 30;
 var plansza;
 var context;

 //waz
 var wazX = rozmiarBloku * 5;
 var wazY = rozmiarBloku * 5;

 var predkoscX = 0;
 var predkoscY = 0;

 var cialoWeza = [];

 //jedzonko



var jedzenieX;
var jedzenieY;

var gameOver = false;

window.onload = function(){
    plansza = document.querySelector("#board")
    plansza.width = kolumny * rozmiarBloku;
    plansza.height = wiersze * rozmiarBloku;
    context = plansza.getContext("2d")
    document.addEventListener("keyUp", zmianaKierunku);
    console.log(context)
    requestAnimationFrame(updateSnake)
}
function updateSnake(){
    if(gameOver){
        return
    }
    context.fillStyle = "black"
    context.fillRect(0,0,plansza.width,plansza.height) 
    requestAnimationFrame(updateSnake)

    context.fillStyle = "red"
    context.fillRect(25, 25, rozmiarBloku, rozmiarBloku) 

    context.fillStyle = "green"
    context.fillRect(wazX, wazY, rozmiarBloku, rozmiarBloku) 
}
function zmianaKierunku(e){
    if(e.code == "ArrowUp" && predkoscY !=1){
        predkoscX = 0;
        predkoscY = -1;
        console.log(e)
    }
}
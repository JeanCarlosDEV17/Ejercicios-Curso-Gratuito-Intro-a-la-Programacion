var canvas = document.getElementById("canvas");
var lienzo = canvas.getContext("2d");
var areaDibujo = canvas.getContext("2d");
var botonReset = document.getElementById("reset");

botonReset.addEventListener("click",limpiar=>{
   lienzo.clearRect(0, 0, canvas.width, canvas.height);
})
// window.onkeyup = moverse;
document.addEventListener("keydown",moverse);
canvas.addEventListener("mousedown", clickDownMouse);
canvas.addEventListener("mousemove", dibujarConMouse);
canvas.addEventListener("mouseup", (levantarMouse) => {active=false});
var movimientoTeclas=3;
var active = false;
var color = "blue";
var posX = 150;
var posY = 150;
let teclas = {
   ARRIBA: 38,
   ABAJO: 40,
   IZQUIERDA: 37,
   DERECHA: 39,
};

function clickDownMouse(evento) {
   active = true;
   posX = evento.offsetX;
   posY = evento.offsetY;
}

function dibujarConMouse(evento) {
   if (active) {
      dibujarLinea(color, posX, posY, evento.offsetX, evento.offsetY,areaDibujo);
      posX = evento.offsetX;
      posY = evento.offsetY;
   }
}

function moverse(event) {
   switch (event.keyCode) {
      case teclas.ARRIBA:
         if (posY - movimientoTeclas >= 0) {
            dibujarLinea(color, posX, posY, posX, posY - movimientoTeclas, areaDibujo);
            posY = posY - movimientoTeclas;
            console.log("Arriba posy = " + posY);
         }

         break;

      case teclas.ABAJO:
         if (posY + movimientoTeclas <= canvas.height) {
            dibujarLinea(color, posX, posY, posX, posY + movimientoTeclas, areaDibujo);
            posY = posY + movimientoTeclas;
            console.log("abajo posY = " + posY);
         }

         break;

      case teclas.DERECHA:
         if (posX + movimientoTeclas <= canvas.width) {
            dibujarLinea(color, posX, posY, posX + movimientoTeclas, posY, areaDibujo);
            posX = posX + movimientoTeclas;
            console.log("derecha posX = " + posX);
         }
         break;

      case teclas.IZQUIERDA:
         if (posX - movimientoTeclas >= 0) {
            dibujarLinea(color, posX, posY, posX - movimientoTeclas, posY, areaDibujo);
            posX = posX - movimientoTeclas;
            console.log("izquierda posX = " + posX);
         }
         break;

      default:
         break;
   }
}

/* REFACTOR
function moverse(event) {
   if (event.keyCode == "39") {
      //derecha
      dibujarLinea(color, posX, posY, posX + 10, posY);
      posX = posX + 10;
      console.log("derecha posX = " + posX);
   }

   if (event.keyCode == "37") {
      //Izquierda
      dibujarLinea(color, posX, posY, posX - 10, posY);
      posX = posX - 10;
      console.log("izquierda posX = " + posX);
      
   }

   if (event.keyCode == "38") {
      //arriba
      dibujarLinea(color, posX, posY, posX, posY - 10);
      posY = posY - 10;
      console.log("Arriba posy = " + posY);
   }

   if (event.keyCode == "40") {
      //abajo
      dibujarLinea(color, posX, posY, posX, posY + 10);
      posY = posY + 10;
      console.log("abajo posY = " + posY);
   }
} */

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo) {
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.lineWidth = 5;
   lienzo.moveTo(xInicial, yInicial); // define el punto inicial
   lienzo.lineTo(xFinal, yFinal);

   lienzo.stroke(); //indicamos que dibuje el trazo
   lienzo.closePath(); //indicamos que finalice el trazo como levanatar el lapiz
}

window.onkeyup = moverse;

var canvas = document.getElementById("dibujo");
var lienzo = canvas.getContext("2d");
var inputNumLineas = document.getElementById("numLineas");
var botonDibujar = document.getElementById("btn_dibujar");

botonDibujar.addEventListener("click", clickDibujar);

console.log(lienzo);

// lienzo.beginPath();
// lienzo.strokeStyle="red";
// lienzo.moveTo(150,10); // define el punto inicial
// lienzo.lineTo(0,300);
// lienzo.lineTo(300,300);
// lienzo.lineTo(150,10)
// lienzo.stroke();//indicamos que dibuje el trazo
// lienzo.closePath();//indicamos que finalice el trazo como levanatar el lapiz

// dibujarLinea("red",150,0,0,300);
// dibujarLinea("green",0,300,300,300);
// dibujarLinea("green",300,300,150,0);
function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.moveTo(xInicial, yInicial); // define el punto inicial
   lienzo.lineTo(xFinal, yFinal);

   lienzo.stroke(); //indicamos que dibuje el trazo
   lienzo.closePath(); //indicamos que finalice el trazo como levanatar el lapiz
}

function cuadricula(xInicial, yInicial, MaxX, MaxY, numLineas = 0) {
   var maxnumLineas = MaxX / 10;
   var yFinal = MaxY;
   var xFinal;
   var ancho;
   if (!numLineas || numLineas < 0) {
      numLineas = 0;
   } else {
      ancho = canvas.width / numLineas;
   }
   // var cxInicial;
   // var cyInicial;
   // var cxFinalMaxY;
   // var yFinal=MaxY;

   for (let i = 1; i <= numLineas && yInicial <= MaxY; i++) {
      xFinal = yInicial + ancho;
      dibujarLinea("blue", xInicial, yInicial, xFinal, yFinal);
      dibujarLinea("red", yInicial, xInicial, yFinal, xFinal);
      dibujarLinea("yellow", MaxX - xInicial, yInicial, MaxX - xFinal, yFinal);
      dibujarLinea("green", xInicial, yFinal - yInicial, xFinal, MaxY - yFinal);
      console.log("linea #" + i);
      console.log("linea #" + i + ", xInicial: " + xInicial + ", yInicial: " + yInicial);
      yInicial = yInicial + ancho;
      // xFinal = yInicial + 1;
   }
}

function clickDibujar() {
   lienzo.clearRect(0, 0, canvas.width, canvas.height);
   var txtNumLineas = inputNumLineas.value;
   cuadricula(1, 1, 500, 500, parseInt(txtNumLineas));
   
}

// cuadricula(300, 300, 300, 300);
// cuadricula(0, 0, 30, 300, 300);

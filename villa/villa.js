var elementoVilla = document.getElementById("villa");
var lienzo = elementoVilla.getContext("2d");

var tileDraw = false;
var srcMapa = "./img/tile.png";

var imagenFondo = new Image();
imagenFondo.src = srcMapa;

var fondo = {
   url: "./img/tile.png",
   load: false,
   imagen: undefined
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;



var vaca = {
   url: "./img/vaca.webp",
   load: false,
   imagen: undefined,
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;

var cerdo = {
   url: "./img/cerdo.webp",
   load: false,
   imagen: undefined,
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;

var pollo = {
   url: "./img/pollo.webp",
   load: false,
   imagen: undefined,
};

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;

// imgPollo.addEventListener("load", dibujar);
// fondo.imagen.addEventListener("load", console.log("yaaaaaaaaaaaaaaaaaaaaaa   " + fondo.imagen ));


 fondo.imagen.addEventListener("load", (dibujarFondo) => {
    fondo.load = true;
    dibujar();
    console.log(fondo.imagen);
 });


vaca.imagen.addEventListener("load", (dibujarVaca) => {
   console.log(vaca.imagen )
   vaca.load = true;
   dibujar();
});

cerdo.imagen.addEventListener("load", (dibujarCerdo) => {
   cerdo.load = true;
   dibujar();
});
pollo.imagen.addEventListener("load", (dibujarPollo) => {
   pollo.load = true;
   dibujar();
});

var numVacas=aleatorio(0,15);
var numCerdos=aleatorio(0,24);
var numPollos=aleatorio(0,15);



function dibujar() {
   if (fondo.load) {
      /* console.log(fondo.imagen); */
      lienzo.drawImage(fondo.imagen, 0, 0);
      if (vaca.load) {
         for (let index = 0; index < numVacas; index++) {
            lienzo.drawImage(vaca.imagen, 160 * aleatorio(0, 2), 80 * aleatorio(0, 4));
            
         }
      }
      if (cerdo.load) {
         var cerdoX=0;
         var cerdoY=0;
         for (let index = 0; index < numCerdos; index++) {
            var numAleatorio=0;
            while(numAleatorio %2 ===0) {
               numAleatorio=aleatorio(1,5)
            }
            cerdoX = 80 * numAleatorio;
            cerdoY = 80 * aleatorio(0, 4);
            lienzo.drawImage(cerdo.imagen, cerdoX, cerdoY);
            // console.log("cerdo en x "+cerdoX+"  cerdo en Y "+cerdoY)
         }
      }
      if (pollo.load) {
         for (let index = 0; index < numCerdos; index++) {
            var polloY=0;
            while (polloY % 2 === 0) {
               polloY = aleatorio(1, 7);
               
            }

            lienzo.drawImage(pollo.imagen,  70*aleatorio(0, 6), 40*polloY);
         }
      }
   }
}

function aleatorio(min, max) {
   // console.log(Math.random ()* (max - min) + min);
   /* for (let index = 0; index < 20; index++) {
      document.write((Math.round(Math.random()*(max-min) +min))+ ", ")
      
   } */
   return Math.round(Math.random() * (max - min) + min);
}

// // // console.log(aleatorio(-0, 1));

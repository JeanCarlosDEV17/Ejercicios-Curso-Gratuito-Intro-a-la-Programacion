var imagenes = [];
imagenes["cauchin"] = "./img/vaca.webp";
imagenes["pokacho"] = "./img/pollo.webp";
imagenes["tocinauro"] = "./img/cerdo.webp";



// console.log(cauchin.imagen.src);
// cauchin.mostrar();
var pakimanes=[];
pakimanes [0]=new Pakiman("cauchin", 100, 30);
pakimanes [1]=new Pakiman("pokacho", 80, 50);
pakimanes.push(new Pakiman("tocinauro", 120, 40));

/* for (var index in pakimanes){
   pakimanes[index].mostrar();
} */

for (var pakiman of pakimanes){
   pakiman.mostrar();
}


/* pakimanes.forEach(function(valor,indice,array){
   valor.mostrar();
}) */
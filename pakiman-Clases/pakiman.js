

class Pakiman {
   nombre;
   vida;
   ataque;
   constructor(nombre = "", vida = 0, ataque = 0) {
      this.nombre = nombre;
      this.vida = vida;
      this.ataque = ataque;
      this.imagen = new Image();
      this.imagen.src = imagenes[this.nombre];
      console.log("creado");
   }

   hablar() {
      console.log("Hola soy " + this.nombre);
   }
   mostrar(){
      document.write("<hr/>")
      document.body.appendChild(this.imagen);
      document.write("<br/> <strong>"+this.nombre+"</strong>"+"<br/>");
      document.write("Vida:"+this.vida+"<br/>")
      document.write("ataque: " + this.ataque+"<br/>");
   }
}


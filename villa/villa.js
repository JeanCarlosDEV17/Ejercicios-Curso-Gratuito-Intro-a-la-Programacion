

function aleatorio(min,max){
   // console.log(Math.random ()* (max - min) + min);
   /* for (let index = 0; index < 20; index++) {
      document.write((Math.round(Math.random()*(max-min) +min))+ ", ")
      
   } */
   return Math.round(Math.random()*(max-min) +min);
}

// console.log(aleatorio(-0, 1));
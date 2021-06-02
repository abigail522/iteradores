//break: cortará la ejecucón de un for();
//continue: permite interceptar un elemento, identificarlo y continuar su ejecución

//Detener el for cuando detecte el elemento 10

//break
for(let i = 0; i<20; i++) {
    if (i === 10) {
      console.log("he llegado al número 10");
      break; //finaliza el conteo del 10 en adelante
    }
    console.log(i);
  } 
  console.log(' ');// este console es para que se vea un salto de linea en la consola
  
  //continue
  for(let i=0; i<15; i++) {
      if(i===7){
          console.log(`has llegado al numero ${i}`);
          continue;
      }
      console.log(i)
  }
  console.log(' ');// este console es para que se vea un salto de linea en la consola
  
  //detectar los articulos que llevan descuento
  const articulos = [
      {nombre:"champu pantene", precio:2, descuento: true},
      {nombre:"jabón palmolive", precio:2},
      {nombre:"crema nivea", precio:5},
      {nombre:"suavizante pantene", precio:3, descuento: true}
  
  ]; 
  for(let i=0; i< articulos.length; i++){
      if(articulos[i].descuento){
          console.log(`el articulo ${articulos[i].nombre} tiene descuento`);
          continue;
      }
      console.log(articulos[i].nombre)
  } 
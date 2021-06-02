for (let i=0; i<10; i++){
console.log(i);
}

/*números pares y impares*/
for(let i=0; i<=20; i++){
    if (i%2==0){
        console.log(`el número ${i}es par`);   
    } else{
        console.log(`el numero ${i} es impar`)
    }
}
/*recorrer array*/
 const alumnos =["javi","paco","cristian","jeanpier","josue","alex",
 "yvonne","silvia","abigail","andres","isa","david","natalia",
 ];
 console.log(alumnos.length);
 for(let i=0; i<alumnos.length; i++){
     console.log(alumnos[i]);
 }

 /*recorrer a un array de objecto*/
 const alumnos2 = [
     {nombre :"carla", edad: 16},
     {nombre :"dani", edad:20},
     {nombre: "ali", edad: 18},
     {nombre:"alejandra", edad: 19},
     {nombre:"violeta", edad: 17},
 ]
 console.log(alumno2.length);
 for(let i=0; i<alumnos2.length; i++) {
     console.log(alumnos2[i].nombre);
 }
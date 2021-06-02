//otros iteradores que existen en JavaScript

//recorrer un array de elementos
let productos = ['camisetas', 'pantalones', 'blusas'];

const nuevoArray=productos.forEach((producto, index) =>  { console.log(`en el indice ${index} hay: ${producto}`);})
console.log(nuevoArray)//sale UNDEFINED porque con un foreach() no puedo hacer un nuevo array

//producto en singular representa cada uno de los elementos del array
//Recuerda que como es una sola linea, la llave es opcional...
console.log(' ');//este console solo me ayuda a dejar espacio en la consola, es como un salto de linea

//Recorrer arreglo de objetos****
const articulos= [
    {id: 1, nombre: 'Gafas', precio: 180 },
    {id: 2, nombre: 'Limpiador de gafas', precio:10},
    {id: 3, nombre: 'Estuche', precio: 20}
];

const nuevoArrayArticulos=articulos.forEach( articulo =>  articulo.nombre);
console.log(nuevoArrayArticulos)//undefined porque es un foreach

console.log('**********')
// Lo mismo aplica para los maps, la sintaxis es la misma, solo recuerda, el map te crea un nuevo arreglo, si solo deseas recorrer los elementos utiliza el Foreach, si requieres crear un nuevo arreglo, sin duda el map sera mejor...

const nuevoArrayArticulos2=articulos.map( art=> (`El precio de: ${art.precio}`));
console.log(nuevoArrayArticulos2)// saca un nuevo array de solo los precios del array porque es con map


"use strict";

// Closures


function counter() {
  var count = 0
  
  return function contador(){
      
      count++

    return count
  }

  // Ejercicio 1

  // La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando un valor numérico que empieza en 1 e incrementa con cada invocación.

  // Ejemplo:
}

const nuevoContador = counter()
console.log(nuevoContador());     // 1
console.log(nuevoContador());     // 2
console.log(nuevoContador());     // 3

const otroContador = counter()
console.log(otroContador());      // 1
console.log(otroContador());      // 2
console.log(otroContador());      // 3

function cacheFunction(cb) {
  const obj = {}
  return function(arg){
    if(obj.hasOwnProperty(arg)){
      return obj[arg]
    } else {
      obj[arg] = cb(arg)
      return obj[arg]
    }
  }
}

function square(n){
  return n * n
}

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) 

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}

/*
  Ejercicio 3

  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)

  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor)
let getNombreAlumno = getNombre.bind(alumno)

/*
  Ejercicio 4
  
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(this,'*','*');
let textoGuiones = crearCadena.bind(this,'-','-');
let textoUnderscore = crearCadena.bind(this,'_','_');

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};

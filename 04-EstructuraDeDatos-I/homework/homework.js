'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.
            0  1  2  3  4  5  6   7  8   9
Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if(n == 0){return 1}
  else if (n < 0){return 0}
  return n * nFactorial(n - 1)
}
            // 0  1    2  3     4  5  6   7  8   9
// Secuencia:  0, 1,   1, 2,    3, 5, 8, 13, 21, 34, ... 
            // 0  1           a + b = c
            // a + b = c


function nFibonacci(n) {
  if(n == 0 || n == 1){return n}
  return nFibonacci(n-2) + nFibonacci(n-1)
}

function fiboFor(n){
  var a = 0
  var b = 1
  var c = 0
  for (let i = 2; i <= n; i++) {
      c = a + b
      a = b
      b = c
  }
  return c
}
 console.log(fiboFor(7));

console.log(nFibonacci(5));

const arrayFibonacci = []

function mostrarFibonacci(n){
  for (let i = 0; i < n+1; i++) {
    arrayFibonacci.push(nFibonacci(i))
  }
  return arrayFibonacci
}
// 0  1  2  3  4  5  6   7  8   9
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
                      // 

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Queue {
  constructor() {
    this.elemento = []
  }
  enqueue(e){
    this.elemento.push(e)
  }
  dequeue(){
    return this.elemento.shift()
  }
  size(){
    return this.elemento.length
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};

"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let pivot = array[0];
  let left = [];
  let right = [];

  if (array.length <= 1) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (pivot >= array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

function merge(){
  let leftIndex = 0
  let rightIndex = 0
  let res = []

  while(leftIndex<left.length&&rightIndex<right.length){
    if(left[leftIndex]<right[rightIndex]){
      res.push(left[leftIndex])
      leftIndex++
    } else {
      res.push(right[rightIndex])
      rightIndex++
    }
  }
  return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 1) return array

  let div = split(array)
  let left = div[0]
  let right = div[1]

  return merge(mergeSort(left),mergeSort(right))
}

function split(arr){
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  return [left, right]
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

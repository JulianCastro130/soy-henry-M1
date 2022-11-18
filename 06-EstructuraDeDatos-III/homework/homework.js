"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
      return value;
    } else {
      this.left = new BinarySearchTree(value);
    }
  }
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
      return value;
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
  return false;
};

BinarySearchTree.prototype.size = function () {
  if (!this.right && !this.left) return 1;
  if (!this.right) return 1 + this.left.size();
  if (!this.left) return 1 + this.right.size();
  return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true;
  if (value < this.value && this.left) {
    return this.left.contains(value);
  }
  if (value > this.value && this.right) {
    return this.right.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, orden) {
  switch (orden) {
    case "pre-order":
      cb(this.value);
      this.left && this.left.depthFirstForEach(cb, orden);
      this.right && this.right.depthFirstForEach(cb, orden);
      break;
    case "post-order":
      this.left && this.left.depthFirstForEach(cb, orden);
      this.right && this.right.depthFirstForEach(cb, orden);
      cb(this.value);
      break;
    default:
    case "in-order":
      this.left && this.left.depthFirstForEach(cb, orden);
      cb(this.value);
      this.right && this.right.depthFirstForEach(cb, orden);
      break;
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, pendientes = []) {
  if(!pendientes){
    var pendientes = []
  }

  cb(this.value)
  
  this.left && pendientes.push(this.left)
  this.right && pendientes.push(this.right)

  pendientes.length > 0 && pendientes.shift().breadthFirstForEach(cb, pendientes)
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

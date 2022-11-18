function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value.num < this.value.num) {
    if (this.left === null) {
      var newTree = new BinarySearchTree(value);
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      var newTree = new BinarySearchTree(value);
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.size = function () {
  if (this.value.num === null) {
    return 0;
  }

  if (this.left === null && this.right === null) {
    return 1;
  }

  if (this.left === null) {
    return 1 + this.right.size();
  }

  if (this.right === null) {
    return 1 + this.left.size();
  }

  return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.obtenerPrendas = function (string) {
  // Tu código aquí:
  let res = []
  if(this.value.nombre === string) return res.push(this.value.nombre)
  if(string !== this.value.nombre && this.left){
    this.left.obtenerPrendas(string)
  }
  if(string !== this.value.nombre && !this.left){
    this.right.obtenerPrendas(string)
  }
}

const arbol = new BinarySearchTree({ nombre: "Camiseta", num: 13 });

arbol.insert({ nombre: "Abrigo", num: 7 });
arbol.insert({ nombre: "Pantalon", num: 6 });
arbol.insert({ nombre: "Abrigo", num: 30 });
arbol.insert({ nombre: "Camiseta", num: 42 });
arbol.obtenerPrendas("Abrigo")



// console.log(arbol);







function List() {
    this._length = 0;
    this.head = null;
  }
  // Declaro Nodo
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  // Función que crea el siguiente nodo
  List.prototype.add = function (data) {
      const newNode = new Node(data)
      let current = this.head
      if(!current){
          this.head = newNode
          this._length++
          return data
      }
      while (current.next !== null){
        current = current.next
      }
      current.next = newNode
      return data
}

const miLista = new List()

miLista.add(10)

console.log(miLista)
// create linked list with 2 methods
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  appendToTail(v) {
    if (this.head === null && this.tail === null) {
      this.head = v
      this[v] = { value: v, next: null}
    }

    if (this.head !== null && this.tail === null) {
      this.tail = v
      return this[this.head].next = this.tail
    }

    this[this.tail] = { value: this.tail, next: v }
    this.tail = v
    return this[v] = { value: v, next: null }
  }

  deleteNode(index) {
    if (this.tail === null) this.head = null
    if (index === this.head) this.head = this[index].next

    if (this.head !== null && this.tail !== null) {
      let currentNode = this[this.head]
      while (currentNode.next !== null) {
        if (currentNode.next === index) {
          if (index === this.tail) {
            currentNode.next = null
            break
          } else
            currentNode.next = this[this[currentNode.next].next].value
        }
        currentNode = this[currentNode.next]
      }
    }
    return delete this[index]
  }
}

/*
let list = new LinkedList()
list.appendToTail('first')
list.appendToTail('second')
list.appendToTail('third')
list.appendToTail('fourth')
list.appendToTail('fifth')
list.deleteNode('third')
console.log(list)
*/

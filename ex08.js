// Implement Queue FIFO
class FIFOQueue {
  constructor() {
    this.index = 0
  }

  enqueue(v) {
    for (let i=this.index; i>0; i--) {
      this[i] = this[i-1]
    }
    this[0] = v
    this.index++
  }

  dequeue() {
    for (let i=0; i<this.index; i++) {
      this[i] = this[i+1]
    }
    this.index--
    delete this[this.index]
  }
}

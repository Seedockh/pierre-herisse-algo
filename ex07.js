// Implement Stack LIFO
module.exports = class LIFOStack {
  constructor() {
    this.index = 0
  }

  push(v) {
    this[this.index] = v
    this.index++
  }

  pop() {
    delete this[this.index-1]
    this.index--
  }
}

// Implement Stack with O(1) access
module.exports = class DirectAccessStack {
  constructor() {}

  push(v) {
    this[Object.keys(this).length] = v
  }

  pop() {
    delete this[Object.keys(this).length-1]
  }

  min() {
    return Math.min(...Object.values(this))
  }
}

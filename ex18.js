const Tree = require('./ex17.js')

class BalancedTree extends Tree {
  constructor() {
    super()
  }

  isBalanced() {
    if (this.tree.length === 0) return null
    if (this.tree.length <= 2) return true

    let isBalanced = true
    this.tree.forEach( node => {
      console.log(`${this.getLeftHeight(node)}-${this.getRightHeight(node)} : ${(Math.abs(this.getLeftHeight(node)-this.getRightHeight(node)) <= 1)}`)
      if (Math.abs(this.getLeftHeight(node)-this.getRightHeight(node)) > 1)
        isBalanced = false
    })
    return isBalanced
  }

  getLeftHeight(node) {
    let jump = 1
    if (node.children.length > 0) {
      jump += this.getLeftHeight(this.tree[node.children[0]])
    }
    return jump
  }

  getRightHeight(node) {
    let jump = 1
    if (node.children.length > 1) {
      jump += this.getLeftHeight(this.tree[node.children[1]])
    }
    return jump
  }
}

// Unbalanced Tree
const t = new BalancedTree()
t.add(50)
t.add(17, 50)
t.add(9, 17)
t.add(14, 9)
t.add(12, 14)
t.add(23, 17)
t.add(19, 23)
t.add(76, 50)
t.add(54, 76)
t.add(72, 54)
t.add(67, 72)
console.log(t.isBalanced())

// Balanced Tree
const tb = new BalancedTree()
tb.add(50)
tb.add(17, 50)
tb.add(12, 17)
tb.add(9, 12)
tb.add(14, 12)
tb.add(23, 17)
tb.add(19, 23)

tb.add(72, 50)
tb.add(54, 72)
tb.add(67, 54)
tb.add(76, 72)
console.log(tb.isBalanced())

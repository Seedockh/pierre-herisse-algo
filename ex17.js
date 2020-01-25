class Tree {
  constructor() {
    this.tree = []
    this.root = null
  }

  add(value, parent = null) {
    if (this.root === null)
      this.root = { v: value, children: [], parent: null }

    if (this.tree[`${parent}`]) {
      if (this.tree[`${parent}`].v === this.root.v)
          this.root.children.push(value)

      this.tree[`${parent}`].children.push(value)
    }

    this.tree[`${value}`] = { v: value, children: [], parent: parent }
  }

  find(value) {
    console.log(this.tree[value]);
    return this.tree[value]
  }

  deleteNode(value) {
    this.tree.forEach( node => {
      if (node.parent === this.root.v)
        delete this.root.children[this.root.children.indexOf(value)]

      if (node.children.indexOf(value) > -1) {
        delete node.children[node.children.indexOf(value)]
      }

      if (node.parent === value) {
        this.deleteNode(node.v)
        delete this.tree[node.v]
      }
    })

    if (value === this.root.v) this.root = null
    delete this.tree[value]
  }
}

module.exports = Tree
/*
const t = new Tree()
t.add(0)
t.add(100, 0)
t.add(200, 0)
t.add(300, 0)
t.add(400, 0)
t.add(500, 0)

t.add(110, 100)
t.add(120, 100)
t.add(130, 100)

t.add(310, 300)

t.add(410, 400)
t.add(420, 400)

t.add(111, 110)
t.add(122, 120)
t.add(133, 130)

t.add(311, 310)
t.add(312, 310)
t.add(313, 310)

t.add(411, 410)
t.add(422, 420)
t.add(423, 420)

console.log(t)
console.log('----- DELETE ROOT')
t.deleteNode(0)
console.log(t)*/

class Tree {
  constructor() {
    this.tree = []
  }

  add(value, parent) {
    if (this.tree[`${parent}`])
      this.tree[`${parent}`].children.push(value)

    this.tree[`${value}`] = { v: value, children: [], parent: parent }
  }

  find(value) {
    console.log(this.tree[value]);
    return this.tree[value]
  }

  deleteNode(value) {
    this.tree.forEach( branch => {
      console.log(branch)
      if (branch.children.indexOf(value) > -1) {
        console.log(`deleting ${value} from ${branch.v} children`);
        delete branch.children[value]
      }

      if (branch.parent === value) {
        console.log(`deleting child ${branch.v} from ${value}`);
        delete this.tree[branch.v]
      }
    })

    delete this.tree[value]
  }
}

const t = new Tree()
t.add(1)
t.add(10, 1)
t.add(11, 10)
t.add(110, 11)
t.add(100, 1)
t.add(101, 100)
t.find(1)
console.log('----- DELETE')
t.deleteNode(11)
console.log(t)
t.find(10)

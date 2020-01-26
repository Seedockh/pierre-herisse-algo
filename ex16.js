module.exports = class Graph {
  constructor() {
    this.adjencies = new Map()
  }

  addNode(value) {
    this.adjencies.set(value, [])
  }

  addNodeFromArray(values) {
    values.forEach((v) => this.addNode(v))
  }

  addEdge(origin, sibling) {
    this.adjencies.get(origin).push(sibling)
    this.adjencies.get(sibling).push(origin)
  }

  removeNode(value) {
    this.adjencies.delete(value)
    for (let siblings of this.adjencies.values()) {
      siblings.map((v,index) => v === value ? siblings.splice(index, 1) : v)
    }
  }

  removeEdge(origin, sibling) {
    let originNode = this.adjencies.get(origin)
    let siblingNode = this.adjencies.get(sibling)
    originNode.splice(originNode.indexOf(sibling), 1)
    siblingNode.splice(siblingNode.indexOf(origin), 1)
  }

  sort(callback) {
    for (let siblings of this.adjencies.values()) {
      for (let i = 0; i < siblings.length-1; i++) {
        if (!callback(siblings[i], siblings[i+1])) {
          let tmp = siblings[i+1]
          siblings[i+1] = siblings[i]
          siblings[i] = tmp
        }
      }
    }
    return this.adjencies
  }

  dump() {
    for (let key of Array.from(this.adjencies.keys())) {
      const values = this.adjencies.get(key)
      console.log(`${key} -> ${values.join(" ")}`)
    }
  }
}
/*
const g = new Graph();

g.addNodeFromArray([1, 2, 4, 5, 6, 7, 8, 10, 13, 42])
g.addEdge(1, 2)
g.addEdge(1, 13)
g.addEdge(1, 6)
g.addEdge(1, 7)
g.addEdge(1, 5)
g.addEdge(2, 4)
g.addEdge(5, 10)
g.addEdge(5, 8)
g.addEdge(4, 8)
g.addEdge(8, 42)
g.dump()
console.log('-------- REMOVING')
g.removeNode(5)
g.dump()
console.log('-------- REMOVING EDGES')
g.removeEdge(1, 13)
g.removeEdge(8, 42)
g.dump()
console.log('-------- SORTING')
console.log(g.sort((a, b) => a < b))
*/

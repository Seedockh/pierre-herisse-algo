const Graph = require('./ex16.js')

// Depth First Search:
// involves searching a node and all its children before proceed- ing to its siblings
function depthFirstSearch(graph, value) {
  let result = null
  graph.adjencies.forEach(children =>
    result ? result :
    children.map(child => child === value ? result = graph.adjencies.get(child) : null)
  )
  if (result) console.log('----> result found in depth')
  return result ? result : breadthFirstSearch(graph, value)
}

// Breadth First Search:
// involves searching a node and its siblings before going on to any children
function breadthFirstSearch(graph, value) {
  let result = null
  graph.adjencies.forEach((children, key) =>
    result ? result : key === value ? result = graph.adjencies.get(value) : null
  )
  if (result) console.log('----> result found in breadth')
  return result ? result : depthFirstSearch(graph, value)
}

const g = new Graph();

g.addNodeFromArray([1, 2, 4, 5, 6, 7, 8, 10, 13, 20, 42])
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
//g.dump()

console.log('=== SEARCHING ELEMENT WITH EDGES ===')
console.log(`values in key 8 : ${depthFirstSearch(g, 8)}`)
console.log(`values in key 8 : ${breadthFirstSearch(g, 8)}`)
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log('=== SEARCHING ELEMENT WITHOUT EDGES ===')
console.log(`values in key 20 : ${depthFirstSearch(g, 20)}`)
console.log(`values in key 20 : ${breadthFirstSearch(g, 20)}`)

const data = [-20, -17, -16, -10,-3, 0, 5, 9, 18, 23, 27]

function distributor(tree, data, parent = null) {
  const middle = data[Math.round((data.length-1)/2)]
  const left = data.slice(0, data.indexOf(middle))
  const right = data.slice(data.indexOf(middle)+1)

  if (middle === undefined) return tree
  tree.push({ v: middle, parent: parent, left: left, right: right })

  distributor(tree, left, middle)
  distributor(tree, right, middle)
  if (tree.length === data.length) return tree
}

function generateTree(data) {
  const tree = distributor([], data)
  console.log('============ RESULT ===========')
  console.log(tree)
}

generateTree(data)

// Find nth-to-last element from singly linked list
module.exports = function distanceFromLast (node, list) {
  let dist = 0
  let currentPos = list[node]
  while (currentPos.next !== null) {
    currentPos = list[currentPos.next]
    dist++
  }
  return dist
}

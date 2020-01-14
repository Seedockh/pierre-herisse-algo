// Remove duplicates from unsorted linked list
module.exports = function removeDuplicates (list) {
  let bucket = []
  for (let node in list) {
    if (bucket.indexOf(node) >= 0) list.deleteNode(node)
    else bucket.push(node)
  }
  return list
}

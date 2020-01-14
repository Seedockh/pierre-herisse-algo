// Are 2 string anagrams
module.exports = function isAnagram (left,right) {
  let bucket = ''
  for (let i=0; i<left.length; i++) {
    if (right.indexOf(left[i]) >= 0)
      bucket += left[i]
  }
  return (left.length === right.length && right.length === bucket.length)
}

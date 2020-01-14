// Are 2 string anagrams
const left = process.argv[2]
const right = process.argv[3]
let bucket = ''

for (let i=0; i<left.length; i++) {
  if (right.indexOf(left[i]) >= 0)
    bucket += left[i]
}

return console.log(left.length === right.length && right.length === bucket.length)

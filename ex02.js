// Reverse a string
const str = process.argv[2]
let reverse = ''

for (let i=str.length-1; i>=0; i--) {
  reverse += str[i]
}

return console.log(reverse)

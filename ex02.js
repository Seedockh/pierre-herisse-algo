// Reverse a string
function reverseStr (str) {
  let reverse = ''
  for (let i=str.length-1; i>=0; i--) {
    reverse += str[i]
  }
  return reverse
}

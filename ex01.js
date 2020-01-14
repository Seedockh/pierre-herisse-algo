// Does a string have all unique characters - without other DatStruct
module.exports = function hasUniqueChars (str) {
  let checkStr = ''
  for (let i=0; i<str.length; i++) {
    if (checkStr.indexOf(str[i])===-1)
      checkStr += str[i]
  }
  return str === checkStr
}

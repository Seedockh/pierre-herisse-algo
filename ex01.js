// Does a string have all unique characters - without other DatStruct
const str = process.argv[2]

let checkStr = ''

for (let i=0; i<str.length; i++) {
  if (checkStr.indexOf(str[i])===-1)
    checkStr += str[i]
}

return console.log(str === checkStr)

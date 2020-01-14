function merge(aArr, bArr) {
  // extracting the empty buffer
  let emptyArr = aArr[aArr.length-1]
  aArr.pop()
  for (let i=0; i < emptyArr.length; i++) {
    emptyArr[i] = bArr[i]
  }

  //merging
  let fullArr = aArr.concat(emptyArr)

  //sorting
  let temp
  for (let j=0; j < fullArr.length; j++) {
    for (let k=fullArr.length; k > 1; k--) {
      if (fullArr[j]>fullArr[k]) {
        temp = fullArr[j]
        fullArr[j] = fullArr[k]
        fullArr[k] = temp
      }
    }
  }

  return fullArr
}

function fibonacci(n) {
  let suite = []
  while(suite.length < n) {
    if (suite.length===0) suite.push(0)
    else if (suite.length===1) suite.push(1)
    else {
      suite.push(
        (parseInt(suite[suite.length-1])+parseInt(suite[suite.length-2]))
      )
    }
  }
  return suite
}

function maxMin (arr1, arr2) {
  let subtraction = []
  for (let i = 0; i < arr1.length; i++) {
  let answer = Math.abs(arr1[i] - arr2[i]) 
  subtraction.push(answer)
  }
  let total = []
  total.push(Math.max(...subtraction))
  total.push(Math.min(...subtraction))
  return total
}

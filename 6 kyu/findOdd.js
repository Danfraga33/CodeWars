function findOdd (A) {
  let oddNum = 0; 
// Iterate over all
  for (let i = 0; i < A.length; i++) {
    let count = 0
// Iterate over all again
    for (let j = 0; j < A.length; j++) {
      // Count
      if (A[j] === A[i]) { 
        count++
      }
    }  
    // Find odd
    if (count % 2 !== 0) {
      oddNum = A[i]
    }
  }
  return oddNum
}
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

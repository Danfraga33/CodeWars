function findOdd (A) {
  let oddNum = 0;

  for (let i = 0; i < A.length; i++) {
    let count = 0

    for (let j = 0; j < A.length; j++) {
      if (A[j] === A[i]) {
        count++
      }
    } 
    if (count % 2 !== 0) {
      oddNum = A[i]
    }
  }
  return oddNum
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

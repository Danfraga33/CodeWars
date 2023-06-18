function findMultiples (integer, limit) {
   const answer = []
  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) {
     answer.push(i) 
    }
  }
  return answer
}

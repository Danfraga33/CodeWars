function removeSmallest (numbers) {
  let withoutLowest = []
  
  for (let i = 0; i < numbers.length; i++) {
    let lowestNum = Math.min(...numbers)
    if (i !==  numbers.indexOf(lowestNum) ) {

      withoutLowest.push(numbers[i])
    }
  }
  return withoutLowest
}

console.log(removeSmallest([1,2,3,4,5]))

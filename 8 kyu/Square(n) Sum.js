function squareSum(numbers) {
  // Create a new array of squared nums
  let squaredNums = numbers.map((num) => {
    return num * num
  }) 

  // sum all of the new nums together
  let sum = squaredNums.reduce((acc, num) => {
    return acc + num
  }, 0)
  return sum
}
const arr = [1, 2, 3, 4, 5] 
console.log(squareSum(arr))

function sumDigPow (a, b) {
  let result = []
  for (let i = a; i < b; i++) {
    if (isDigitPower(i)) {
      result.push(i)
    }
  }

  return result
} 


function isDigitPower (num) {
  let sum = 0;
  const digits = num.toString().split('');

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(parseInt(digits[i]), i + 1)
  }
  return sum === num
}

console.log(sumDigPow(1,100))

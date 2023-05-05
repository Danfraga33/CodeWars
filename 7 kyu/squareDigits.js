function squareDigits(num){
  let squareArr = []
  let splitedNum = Array.from(String(num).split(""))
  splitedNum.forEach((num) => squareArr.push(num * num))
  return Number(squareArr.join(""))
}

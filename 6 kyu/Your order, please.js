function order (words) {
  let arranged = [] 
  let splitedText = words.split(" ")
  splitedText.sort((a, b) => {
    const numA = extractNumbericValue(a); 
    const numB = extractNumbericValue(b);
    return numA - numB
  })
  return splitedText.join(" ")
}


const extractNumbericValue = function (word) {
  let numericValue =""

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!isNaN(char) && char !== " ") {
      numericValue += char
    }
  }
  return parseInt(numericValue);
}

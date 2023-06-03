// complete the function
function solution (string) {
  let words = []
  // let splittedString = string.split("")
  let currentWord = ''

  for (let i = 0; i < string.length; i++) {
    if (i !== 0 && string[i] === string[i].toUpperCase()) {
      // words.push(splittedString.slice(0, i).join(""))
      words.push(currentWord)
      currentWord = ''
    }
    currentWord += string[i]
  }
  words.push(currentWord)
  return words.join(' ') 
}

function duplicateEncode(word){
  // let splittedWord = word.split('')
  const charCounts = {}
  for (let i = 0; i < word.length; i++) {
    let hello = word[i].toLowerCase()
    
    if (charCounts[hello]) {
      charCounts[hello]++;
    } else {
      charCounts[hello] = 1;
    }
  }
  /// we now have an object with key value pairs.
  /// Now we have the change the text from letters to '(' or ')'. Using an if statement, meaning that if charcters within the object, are more than 1 or not.
  let result = ''
  for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    
    if (charCounts[char] > 1) {
      result += ')'
    } else {
      result += '('
    }
  }
  return result
 }

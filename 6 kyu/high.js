function high(x){
  let wordList = x.split(' ');
  let maxScore = 0;
  let heighestWord = ''

  for (let i = 0; i < wordList.length; i++) {
    let word = wordList[i]
    let score = 0

    for (let j = 0; j < word.length; j++) {
      let char = word.charAt(j);
      score += char.charCodeAt(0) - 96
    }

    if (score > maxScore) {
      maxScore = score
      heighestWord = word
    }
  }

  return heighestWord
}

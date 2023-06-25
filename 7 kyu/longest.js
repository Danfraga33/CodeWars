function longest(s1, s2) {
 // Concate both s1 to s2
  const joined = s1.concat(s2)
  
  const splitted = joined.split('')

  let answer = [];
  for (let i = 0; i < splitted.length; i++) {
    if (!answer.includes(splitted[i])) {
      answer.push(splitted[i])
    }
  }

  return answer.sort().join('')
}

function twoSort(s) {
  // 1. Sort words by alphatical order based on the ASCII values and assign the first word to a variable.
  const sorted = s.sort()
  
  // 2. split the letters up, and add *** after each letter except the last
  const splitted = sorted[0].split('')
  // return splitted

  for (let i = 0; i < splitted.length - 1; i++) {
    splitted[i] = splitted[i].concat('***');
  }
  return splitted.join('');
   //3. Lastly join up the elements into a string. return this value.


  // 
  }

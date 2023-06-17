function correct (string) {
  // Corrections
  const corrections = {
    '5': 'S',
    '0': 'O',
    '1': 'I'
  };
  //split up string
  const characters = string.split("")

  for (let i = 0; i < characters.length; i++) {
    let character = characters[i]

    if (corrections.hasOwnProperty(character)) {
      characters[i] = corrections[character]
    } 
  }
  const correctedString = characters.join('')
  return correctedString
  }

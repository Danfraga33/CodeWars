  function alphabetPosition (text) {

    let stripped = text.split('');
    let positions = []; 
    for (let i = 0; i < stripped.length; i++) {
      if ((stripped[i] >= 'a' && stripped[i] <= 'z') || (stripped[i] >= 'A' && stripped[i] <= 'Z'))
        {  
        const position = stripped[i].toLowerCase().charCodeAt(0) - "a".charCodeAt(0) + 1; 
        positions.push(position);
        } 
    }
    const position2 = positions.join(' ')
    return position2
  }


  console.log(alphabetPosition("The sunset sets at twelve o' clock."));


// 1. Break up into every letter
// 2. Check if letter is not string
// 3. Else return the number of that letter in the alphabet
// 4. Suprise, use join to turn all into string. \

function XO (str) {
  const splitted = str.split("")
  let exes = 0;
  let zeros = 0; 
  
  for (let i = 0; i < str.length; i++) {
    if (splitted[i].toLowerCase() === 'x') {
      exes++; 
    } else if (splitted[i].toLowerCase() === 'o') {
      zeros++;
    }
  }
  if (exes === zeros || (exes === 0 && zeros === 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(XO('xoo'))

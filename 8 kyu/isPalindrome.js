function isPalindrome(x) {
  const stringL = x.toLowerCase();
  let splitted = stringL.split('').reverse().join('');
  return (splitted === stringL) ? true : false
} 

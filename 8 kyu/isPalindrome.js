function isPalindrome(x) {
  const stringL = x.toLowerCase();
  let splitted = stringL.split('').reverse().join('');
  const result = (splitted === stringL) ? true : false
  return result
}

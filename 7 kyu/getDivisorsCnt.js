function getDivisorsCnt (n) {
  let divisions = 500000;
  let count = 0;
  for (let i = 1; i <= divisions; i++) {
    n % i === 0 ? count++ : 0  
  }
  return count
  // todo  
}

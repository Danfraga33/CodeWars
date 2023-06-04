function powersOfTwo(n) {
  if (n >= 0) {
    let answer = [];
    for (let i = 0; i <= n; i++) {
      let pumpedUp = Math.pow(2, i);
      answer.push(pumpedUp);
    }
    return answer;
  }
}

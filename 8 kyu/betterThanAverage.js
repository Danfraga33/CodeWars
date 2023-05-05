function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = classPoints.reduce((acc, curr) => acc + curr, 0);
  let average = sum / classPoints.length;
  if (yourPoints > average) {
    return true;
  } else {
    return false;
  }
}

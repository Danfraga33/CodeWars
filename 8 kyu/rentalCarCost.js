function rentalCarCost(d) {
  // Your solution here
  let totalCost; 
  if (d <= 2) {
    totalCost = d * 40
  } else if (d >= 7) {
    totalCost = (d * 40) - 50
  } else if (d < 7 && d >= 3) {
    totalCost = (d * 40) - 20
  }
  return totalCost
}

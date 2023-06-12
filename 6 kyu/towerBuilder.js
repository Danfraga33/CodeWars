function towerBuilder(nFloors) {
  const tower = [];
  for (let floor = 1; floor <= nFloors; floor++) {
    const numSpaces = nFloors - floor;
    const numStars = 2 * floor - 1;
    const floorStr = ' '.repeat(numSpaces) + '*'.repeat(numStars) + ' '.repeat(numSpaces)
    tower.push(floorStr)
  }
  return tower
}

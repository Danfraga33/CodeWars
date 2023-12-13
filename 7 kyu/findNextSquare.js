function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    // If a sq === sq*sq, THEN RETURN (sq + 1)*sq
    if (Number.isInteger(Math.sqrt(sq))) {
      return (Math.sqrt(sq) + 1) * (Math.sqrt(sq)+1) 
    } else return -1
}
   

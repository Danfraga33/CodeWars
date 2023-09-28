function isTriangle(a,b,c)
{ // Triangle Theory = sum of lengths of two sides > one side.
  if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && a > 0 && b > 0 && c > 0) {
    if (a + b > c && a + c > b && c + b > a) {
      return true
    } else return false 
  }
  return false
}
 
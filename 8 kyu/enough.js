function enough(cap, on, wait) {
  // your code here

  if ((on + wait) > cap) {
    return (on + wait) - cap
  } else if ((on + wait) === cap) {
    return 0
  } else return 0
}

function bouncingBall(h,  bounce,  window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >=  h) {
    return -1
  }
  
  let timesTheBallIsSeen = 0;
  let  bounceH = h;
  console.log(bounceH)
  while (bounceH > window) {
    timesTheBallIsSeen += 1
    bounceH *= bounce 
    // console.log(bounceH)
    if(bounceH > window) {
      
      timesTheBallIsSeen += 1
    }
  }
   return timesTheBallIsSeen
}

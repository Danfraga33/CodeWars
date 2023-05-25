const sequenceSum = (begin, end, step) => {
  if (begin >= end) {
    return 0
  } else (begin < end) 
  {
    // let inBetween = end / step
    let result = 0
    for (let i = begin; i <= end; i += step) {
      result += i 
    }
    return result
    }
};

console.log(sequenceSum(1,5,1))

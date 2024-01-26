var uniqueInOrder=function(iterable){
  //   const arr =  Array.from(iterable)
    // [ 'A', 'B', 'B', 'C', 'c', 'A', 'D' ]
  //   const unqiueArr = arr.filter((value, index, array) => value !== array[index + 1])
  //   [ 'A', 'B', 'C', 'c', 'A', 'D' ]
    
    return Array.from(iterable).filter((value, index, array) => value !== array[index + 1])
  }

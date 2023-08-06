var min = function(list){
    let min = Math.min(list)
    
  return Math.min.apply(Math, list);
}

var max = function(list){
  
  return Math.max.apply(Math, list); 
}

function descendingOrder(n){
  // Broken Down into an array to target single values
   const splited = String(n).split('') 
   
   // fn created for use on sort
   function compareDigits (a, b) {   
     return b - a;  
   }
 
   const arr = []
   //only take positive integers 
   for (let i = 0; i < splited.length; i++) {
     if (splited[i] >= 0) {
       arr.push(splited[i])
      }
    }
    
   // splited is sorted according to criteria in compareDigits(descending)
   let cheese = arr.sort(compareDigits)
   return Number(cheese.join(''))
   
  }

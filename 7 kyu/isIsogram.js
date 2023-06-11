function isIsogram(str){
  let lowercase = str.toLowerCase()
  let splited = lowercase.split("")

  let letterSet = new Set()
  
  
  
  for (let i = 0; i < splited.length; i++) {
    if (letterSet.has(splited[i])) {
      return false
    } 
    letterSet.add(splited[i])
  }
  return true
  //...
}

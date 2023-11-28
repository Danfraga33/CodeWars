function domainName(url) {
  let domainName = url.split('//').pop().split('www.').pop().split('.').shift()
  return domainName;    
}          
           
       
   
 

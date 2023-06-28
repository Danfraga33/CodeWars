function domainName(url) {
  let domain = url.split('//').pop().split('www.').pop().split('.').shift()
  return domain;
}
 

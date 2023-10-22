function abbrevName(name) {
  let adjusted = name
    .toUpperCase()
    .split(" ")
    .map((n) => n[0])
    .join(".");
  return adjusted; 
} 

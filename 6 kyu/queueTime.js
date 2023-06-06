function queueTime (customers, n) {

  if(n === 1) {
  const duration = customers.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
  
    
    return duration
  } else if (n > 0) {
    const registers = new Array(n).fill(0);
    console.log(registers)

    for (let i = 0; i < customers.length; i++) {
      const minIndex = registers.indexOf(Math.min(...registers));
      registers[minIndex] += customers[i];
    }
  
    const maxTime = Math.max(...registers);
    return maxTime;
  }
  }




  const registers = new Array(2).fill(0);
  console.log(registers)

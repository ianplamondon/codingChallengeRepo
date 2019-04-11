function primeSum(num) {
    let arr = [];
    for (let i = 2; i < num; i++) {
      arr.push(i);
    }
  
    let primeArr = [...arr];
    primeArr = primeArr.filter((number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0)
          return false;
      }
      return true;
  
    });
  
    let sum = 0;
    for (let i = 0; i < primeArr.length; i++) {
      sum += primeArr[i];
    }
    return sum;
  }
  
  console.log(primeSum(17)); // Works out
  
  console.log(primeSum(2001)); // Works out
  
  console.log(primeSum(140759)); // Works out
  
  console.log(primeSum(2000000)); // Gives 17,003,176,600  instead of 142, 913, 828, 922
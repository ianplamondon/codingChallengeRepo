function sumSquareDifference(num) {
    let sumSquares = 0;
    let squareSums = 0;
    for(let i=0;i<=num;i++){
      sumSquares += i**2;
    }
    for(let i=0;i<=num;i++){
      squareSums += i;
    }
    squareSums = squareSums ** 2;
    let diff = squareSums - sumSquares;
    return diff
    }
   
   console.log(sumSquareDifference(100));
   
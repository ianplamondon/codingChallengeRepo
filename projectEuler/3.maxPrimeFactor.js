function maxPrimeFactor(num){
    let factorArr =[];
    for(let i=0;i<=num;i++){
        if(num%i===0){
            factorArr.push(i);
        }
    }
    let primeArr = [...factorArr];
console.log('factorArr is: ' + factorArr);
primeArr = primeArr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

    console.log('primeArr is: ' + primeArr);
    let result = Math.max(...primeArr);
    console.log('result is: ' + result);
    return result;
}
console.log(maxPrimeFactor(2))
console.log(maxPrimeFactor(13195));
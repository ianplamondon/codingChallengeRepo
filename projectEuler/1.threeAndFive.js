// Function returns the sum of all multiples of 3 and 5 below the input value.
function threeAndFive(num) {
  let arr = [];
  for(let i=0; i<num;i++){
    // if statement checks if each number below the input value is a multiple of 3 and whether it's already in the array.
    if(i%3 == 0 && arr.indexOf(i)<0){
      arr.push(i);
    }
    // else if statement checks if each number below the input value is a multiple of 5 and whether it's already in the array.
    else if(i%5 ==0 && arr.indexOf(i)<0){
      arr.push(i);
    }
    // else{
    //   continue
    // }
  }
  
  let val = 0;
  // for loop adds each value from the array to the val variable.
  for(let i=0;i<arr.length;i++){
    val += arr[i];
  }
  return val;
}
console.log(threeAndFive(10));
console.log(threeAndFive(49));
console.log(threeAndFive(1000));
console.log(threeAndFive(19564));
// This code creates an array of values that are present in one and only one array. 
function sym() {
    // Accounts for an unknown number of arrays.
    let args = [];
    for(let i=0;i<arguments.length;i++){
      args.push(arguments[i]);
    }
   
    function symmetricDifference(arr1, arr2){
      let results = [];
    //   Checks to see if any values of array 1 are neither present in array 2 nor the results array.
      arr1.forEach(function(item){
        if(arr2.indexOf(item)<0 && results.indexOf(item)<0){
          results.push(item);
        } 
      });
    //   Same but for array 2
      arr2.forEach(function(item){
        if(arr1.indexOf(item)<0 && results.indexOf(item)<0){
          results.push(item);
        }
      });
      return results;
    }
    // Applies the function to an unknown number of arrays.
    return args.reduce(symmetricDifference).sort();
   }
   console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
   
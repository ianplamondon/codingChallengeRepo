function updateInventory(arr1, arr2) {
    let inventory = Array.prototype.concat.apply([],arr1);

    for(let i=0;i<arr2.length; i++){
      let thing = arr2[i][1];
      let quant = arr2[i][0];

      const location = inventory.indexOf(thing);

      if(location !== -1){
        let row = Math.floor(location/2);
        arr1[row][0] += quant;
        continue;
      }
      arr1.push([quant,thing]);
    }
    arr1.sort((previous,next) => (previous[1] >[next[1]]) ? 1 : -1);
    return arr1;
}

// Example inventory lists
var curInv = [
    [5, "Pencils"],
    [2, "Pairs of Socks"],
    [10, "Pounds of Coffee"],
    [1, "Chocolate Bars"]
];

var newInv = [
    [2, "Chickens"],
    [3, "Apples"],
    [67, "Pounds of Coffee"],
    [7, "Chocolate Bars"]
];

console.log(updateInventory(curInv, newInv));
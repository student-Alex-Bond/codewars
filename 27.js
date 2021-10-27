"use strict";

function flattenAndSort(array) {
    const arr = [];
   
    for (let i=0; i<array.length; i++){
        for (let b = 0; b < array[i].length; b++){
            arr.push(array[i][b]);
        }
    }
    arr.sort((a,b) => a-b);
   
       
    
  // Good luck, brave code warrior!
  return arr;
}
const arr =  [[1, 3, 5], [100], [2, 4, 6]];
console.log(flattenAndSort(arr))
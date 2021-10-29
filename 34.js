function twoHighest(arr) {
    newArr =[]
    if (arr.length <=1){
      return arr;
    }else {
      for (let i=0;i< arr.length;i++){
        if (arr[i] !== arr[i+1]){
            newArr.push(arr[i])
        }
      }
    newArr.sort((a,b)=> a-b)
    return newArr.slice(-2).reverse()
    }
    }

 const arr = [15, 20, 20, 17]; 
  console.log(twoHighest(arr)); 

  //console.log([15, 20, 20, 17].slice(-2))
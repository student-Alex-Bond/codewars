function positiveSum(arr) {
  const newArr=[];
    arr.forEach(el =>  el>0? newArr.push(el): 5);
    res = newArr.reduce((a, b) =>{
        return a +b
    } , 0)

    
  return res
}

const arr = [];
console.log(positiveSum(arr))
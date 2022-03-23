function maxDiff(list) {
  if(list.length <=1 ){
    return 0;
  }
  let max = Math.max.apply( Math, list )
  let min = Math.min.apply( Math, list )
  return max - min
};
console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]))

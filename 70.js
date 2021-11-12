function findDifference(a, b) {
 return res = Math.abs(([...a].reduce((sum , a) => sum * a ,1)- [...b].reduce((sum , a) => sum * a ,1)))
    
  }

  let a= [3, 2, 5], b= [1, 4, 4];
  console.log(findDifference(a, b))
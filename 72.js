multiplicationTable = function(size) {
    // insert code here
    let arr = []
    let arr1 =[]
    for (let i=1;i<=size;i++){
      for(let j=1; j<=size;j++){
          arr1.push(j*i)
      }
      arr.push(arr1)
      arr1=[]    
        
    }
    return arr
  }
console.log(multiplicationTable(3))  
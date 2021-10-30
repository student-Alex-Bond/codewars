function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
     let res = marks.reduce((a,b) =>{
        return a+b;
      }, 0)
  
      return Math.floor(res/marks.length)
  }

  const arr = [1,2,3,4,5,];
  console.log(getAverage(arr))
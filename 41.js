function invert(array) {
  let arr= [];
    if (array.length==0){
       return array
   }else{
     array.forEach(el => el>0? arr.push(-el) : arr.push(-el));
   }
    
  return arr
 }

 const arr =[1,-2,3,4,5];
 console.log(invert(arr))
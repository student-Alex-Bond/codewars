function digitize(n) {
    //code here
    n= String(n);
   const arr =[];
   for (let i=0; i< n.length; i++){
       arr.push(Number(n[i]));
   }
    return arr.reverse();
  }

  const a = 348597;

  console.log(digitize(a))
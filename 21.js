function lastDigit(n, d) {
    res = [];
    n= String(n);
    if (d > 0 ){
        let str = n.slice(-d);
        for(let i=0; i<str.length;i++){
            res.push(Number(str[i]))
        }
      }
    else if ( d<=0){
      return res;
    }
    
    return res;
  }
let n = 123767;
let d = 4;
  console.log(lastDigit(n, d))
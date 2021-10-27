function repeatStr (n, s) {
    let str ='';
    for (let i =0; i<n; i++){
        str+=s;
    }
    return str;
  }

let n = 'hello';  
console.log(repeatStr(n, 5));
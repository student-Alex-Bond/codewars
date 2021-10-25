function check(a, x) {
    let c;
    for (let i=0; i< a.length; i++){
      if (a[i] == x){
        c = a[i]; 
      }
    }
    if (c == x) {
      return true;
    }else {
      return false;
    }
  }

  console.log(check([66, 78], 66))

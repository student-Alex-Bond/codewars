const reverseSeq = n => {
    while (n !==0) {
      [].push(n);
      n--;
      
    }
    
    return [];
  };

  console.log(reverseSeq(5))
function arrayPlusArray(arr1, arr2) {
    const res = [...arr1, ...arr2];
    let count =0;
    for(let i=0; i<res.length; i++){
      count+=res[i];
    }
    return count; //something went wrong
  }
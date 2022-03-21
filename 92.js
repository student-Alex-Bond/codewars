function inAscOrder(arr) {

  for (let i = 0; i < arr.length-1; i++) {
    
    if (arr[i] < arr[i + 1]) {
      if(i === arr.length-2){
        return true
      }
    } else {
      return false
    }
  }
}

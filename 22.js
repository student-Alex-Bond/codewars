function evenNumbers(array, number=0) {
  const arr = array.filter(el => el%2 ==0);

  const  res =[];
  for (i=0; i<number;i++){
      res.unshift(arr[arr.length -i-1])
  }
  return res;
  
    // good luck
  }

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(evenNumbers(arr, 3))
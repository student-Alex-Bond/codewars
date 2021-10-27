function evenNumbers(array, number) {
  const arr = array.filter(el => el%2 ==0).slice(-number);
  
  return arr;
  
    // good luck
  }

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(evenNumbers(arr, 3))
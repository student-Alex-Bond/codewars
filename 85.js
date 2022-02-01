function sumTwoSmallestNumbers(numbers) {  
    let min = Math.min.apply(null, numbers)
   let index = numbers.lastIndexOf(min)
   numbers.splice(index, 1)
   let min2 = Math.min.apply(null, numbers)

   let res = min+ min2

    return res
    //Code here
  }

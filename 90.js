function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(el => el === Number(el))
  } 


console.log(filter_list([1,2,'a','b', '123']))

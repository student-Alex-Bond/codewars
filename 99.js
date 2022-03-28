Array.prototype.remove_ = function (integer_list, values_list) {
  let a = integer_list

  for (let i = 0; i < values_list.length; i++) {
   a = a.filter(item => item !== values_list[i])
  }

  return a
  //your code here
}

console.log((Array.prototype.remove_([1, 1, 2, 3, 1, 2, 3, 4], [1, 3])))

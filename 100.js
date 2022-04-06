function insertDash(num) {
   //code me
   let arr2 = num.toString().split("");
  num.toString().split("").forEach(
    function(item, index, arr) {
        if (+arr[index] % 2 == 1 && index + 1 < arr.length && +arr[index + 1] % 2 == 1) {
          arr2.splice(arr2.length - arr.length + index + 1, 0, "-"); // нужно вычислить куда ставить новый элемент (arr2 разширяется, поетому просто index не подойдет)
        }
    });
  return arr2.join("");
}

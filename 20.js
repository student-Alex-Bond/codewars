function highAndLow(numbers){
    const arr = numbers.split(' ');
    arr.forEach(el => {el = Number(el)});
    let min = Math.min.apply( Math, arr);
    let max = Math.max.apply( Math, arr);
    let res = String(max) + ' ' +  String(min);
    return res;
  }

  str ="1 2 3 4 5";

  console.log(highAndLow(str))
function highAndLow(numbers){
    const arr = numbers.split(' ');
    for(let i=0; i<arr.length; i++){
        arr[i]= Number(arr[i]);
    }
    let min = Math.min.apply( Math, arr);
    let max = Math.max.apply( Math, arr);
    let res = String(max) + ' ' +  String(min);
    return res;
  }

  str ="1 2 3 4 5";

  console.log(highAndLow(str))
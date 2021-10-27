function findShort(s){
    let arr = s.split(' ');
    let count = arr[0].length;
    for (let i=0; i< arr.length; i++){
       if (count > arr[i].length){
           count = arr[i].length;
       }

    }
    return count;
}

str = 'bitcoin take over the world maybe who knows perhaps';

console.log(findShort(str))
function getCount(str) {
    var vowelsCount = 0;
    str = str.toLowerCase()
    let newstr = str.split('')
    let arr = ['a', 'e', 'i', 'o', 'u']
for(let i=0;i<arr.length;i++){
    for(let j=0;j<newstr.length;j++){
        if(arr[i]===newstr[j]){
            vowelsCount+=1
        }
    }
}
  
    return vowelsCount;
}

console.log(getCount('abracadabra'))

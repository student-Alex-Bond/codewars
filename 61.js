function pigIt(str){
    //Code here
    let res = '';
    arr = str.split(' ')
    resArr = [];
    for (let i=0;i<arr.length;i++){
        if (arr[i] =='!','?'){
            res+=arr[i];
            resArr.push(res);
            res='';
        }else{
        res += arr[i].slice(1, arr[i].length) + arr[i].slice(0,1)+'ay';
        resArr.push(res)
        res='';
        }
    }
    return resArr.join(' ');
  }

const str = 'Pig latin is cool ?'; 
console.log(pigIt(str))
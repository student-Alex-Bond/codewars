function removeChar(str){
    //You got this!
    return newStr = str.slice(1, str.length-1)
   };
const str = 'eloquent';
console.log(removeChar(str))   

const as = (str) => {
    let nStr = '';
    for (let i=1;i<str.length-1;i++){
        nStr+= str[i];
    }
return nStr
} 
const str = 'eloquent';
console.log(as(str)) 
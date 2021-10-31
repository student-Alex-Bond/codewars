function longest(s1, s2) {
    // your code
    a1 = s1.split('').sort().join('')
    a2 = s2.split('').sort().join('')
    function short(a){
        let res='';
       for (let i= 0; i<a.length;i++){
        if (a[i]== a[i+1]){
            res +=a[i+1]; 
            i++
            res = short(res) 
        }  else{
        res += a[i]; }
       }
      
      return res
    }

const str1 = short(a1)
const str2 = short(a2);
console.log(str1)
console.log(str2)
const newStr = (str2 + str1).split('').sort().join('');
str3 = short(newStr)
console.log(str3.split(''))  
return str3
}

const a = "loopingisfunbutdangerous"
const b = "lessdangerousthancoding" 

console.log(longest(a,b))


function longest(s1, s2) {
    // your code
    function short(a){
        let res='';
        a1 =a.split('').sort().join('')
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

const str1 = short(s1)
const str2 = short(s2);
console.log(str1)
console.log(str2)

const newStr = (str1 + str2).split('').sort().join('');
str3 = short(newStr)
return str3
  }

const a = "aretheyhere"
const b = "yestheyarehere" 

console.log(longest(a,b))


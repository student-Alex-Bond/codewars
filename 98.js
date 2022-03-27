function explode(s) {
    let a= ''
    
for (let i=0;i<s.length;i++){
    for (let j=0;j<+s[i];j++){
        a+=s[i]
    }
}
    return a;
  }

console.log(explode("312"))
//alternative
function explode(s) {
    return s.split("").map((e) => e.repeat(+e)).join("");
  }

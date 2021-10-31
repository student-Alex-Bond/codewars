const a = "xyabcdefwxyabklmopq"
const etalon = 'cdefwxyabklmopq'
function delDoubleChar(a) {
  res =a.split('');
  for(let i=0;i<res.length;i++){
    for(let j=0;j<res.length;j++){
      if (i==j){
        j++
      }
      if (res[i] === res[j]){
              res.splice(res[j],1)
              
        }
    }
  }
 
 
  return res.join('');
}
console.log(etalon)
console.log(delDoubleChar(a))


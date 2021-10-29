function abbrevName(name){
n = name.split(' ')
let res ='';
    // code away
    for (let i=0;i<n.length;i++){
        res+=n[i][0];
    }
return `${res[0].toUpperCase()}.${res[1].toUpperCase()}`;
}

const nam = "P Favuzzi";

console.log(abbrevName(nam))
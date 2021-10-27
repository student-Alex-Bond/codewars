function generatePairs(n) {
const arr=[];

for (let i=0;i<=n; i++){
    for (let it=i;it<=n;it++){
        arr.push([i,it])
    }
    
}


return arr;
}

const n =2;
console.log(generatePairs(2))
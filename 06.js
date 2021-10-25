function reverseList(list) {
    lister = [];
    for (let i = list.length-1 ; i >= 0 ; i--){
        lister.push(list[i])
    
    }
    return lister
}

const list = [1,2,3,4];

console.log(reverseList(list))
function findSmallestInt(args) {
    let min=args[0];
    for(let i=0; i<args.length; i++){
      if (args[i]< min){
        min= args[i];
      }
    
    }
    return min;
}

const v = [78,56,232,12,8];

console.log(findSmallestInt(v));
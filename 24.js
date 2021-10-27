var Calculator = {
    average: function(...args) {
     arr = args;
     let res = 0;
     
        if (arr.length !=0){
            arr.forEach(el => res+=el);
            res = res/arr.length;
        }
     
     
        return res;
    }
   };


fun = Calculator.average(3,4,5);
console.log(fun);


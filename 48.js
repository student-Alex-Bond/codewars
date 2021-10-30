function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    res = classPoints.reduce((a,b)=> {
        return a+b;
    }, 0)
    res/=classPoints.length;
    return yourPoints>=res? true: false
  }

  const arr = [100, 40, 34, 57, 29, 72, 57, 88];
  //console.log(betterThanAverage(arr, 75))


  //console.log(1%2)

  function lovefunc(flower1, flower2){
    // moment of truth
    if ((flower1%2!=0 && flower2%2==0) ||(flower2%2!=0 && flower1%2==0) ){
      return true;
    }else{ 
    return false;}
  }



  function solution(str){
    let str1 = str.split('').reverse().join('');
    return   str1
  }

  //console.log(solution('world'))

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
   if ( distanceToPump <= (mpg * fuelLeft )) {return true} else{ return false}
  };

  console.log(zeroFuel(50, 25, 2))
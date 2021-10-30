const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
   if ( distanceToPump <= (mpg * fuelLeft )) {return true} else{ return false}
  };

  console.log(zeroFuel(50, 25, 2))
function rentalCarCost(d) {
    const bid = 40;
    if (d <=2){
      return d* bid;
    } else if (d>=3 && d< 7){
      return (d*bid) - 20;
    }else if (d>=7){
      return (d*bid) - 50;
    }
  }

  console.log(rentalCarCost(4))
var number = function(busStops){
    let incoming = 0;
    let outgoing = 0;
    for(let i =0; i<busStops.length;i++)
    {incoming+=busStops[i][0];}
    for(let i =0; i<busStops.length;i++)
    {outgoing+=busStops[i][1];}

    return res = incoming- outgoing;
    // Good Luck!
  }

  const people = [[10,0],[3,5],[5,8]];
  let count = 5;

  console.log(number(people))
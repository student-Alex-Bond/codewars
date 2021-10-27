
function usdcny(usd) {
    let yu = 6.75;
    let curs = (usd*yu).toFixed(2);
    let res='Chinese Yuan'
    return res= curs + " " + res;  
  }

console.log(usdcny(5));
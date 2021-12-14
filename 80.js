function bmi(weight, height) {
  let x = weight/(hieght*height)
  if(x <= 18.5) {return 'Underweight' }
  else if(x<=25){return "Normal"}
  else if(x<=30){return  "Overweight"}
  else{
    return "Obese"
  }
 
}

console.log(iceBrickVolume(1,10,2))
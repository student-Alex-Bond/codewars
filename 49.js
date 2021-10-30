function checkObj(obj, checkProp) {
    // Only change code below this line
    
    let check = obj.hasOwnProperty(checkProp);
    console.log(check)
    if (check){
      return obj[checkProp]
    }else{
      return 'Not Found'
    }
}
const obj = {
    gift: "pony", 
    pet: "kitten", 
    bed: "sleigh"
  }

  console.log(checkObj(obj, "gift"))

function fakeBin(str){
  let newString = "";
  for(let i=0;i<str.length;i++){
    if(Number(str[i])>=5){
      newString += "1"
    }
    else{
      newString += "0";
    }
  }
  return newString;
}

//('45385593107843568'), '01011110001100111'); заменяет в исходной строке цифру меньше 5 на 0, больше 5 на 1

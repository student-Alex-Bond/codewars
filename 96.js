const swapCase = function(letters){
    const newLetters = "";
    for(let i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
        }else {
            newLetters += letters[i].toLowerCase();
        }
    }
   
    return newLetters;
}

const text = 'So, today we have REALLY good day';

const swappedText = swapCase(text)

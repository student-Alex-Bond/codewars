function correct(string) {
    let s = '';
    for (let i=0; i< string.length; i++){
        if (string[i] == '5'){
            s +='S';
            continue;
        } else if ( string[i] == '0'){
            s+= 'O';
            continue;
        } else if (string[i] == '1'){
            s += 'I';
            continue;
        }
        s+=string[i]; 
    }
    return s;
    // your code here
}

const str = "51NGAP0RE";

console.log(correct(str))
function array(arr){
    //Good luck
    let a = arr.split(',')
    a.pop();
    a.shift()
    
    return a.join(' ')
 }

    let a= '1,2,3'
    console.log(array(a))
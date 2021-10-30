function isPalindrome(x) {
    // your code here
    str =  x.toLowerCase();
   
    str1 = str.split('').reverse().join('');
    return str == str1 ? true : false
  }
const x = 'Hello'
  console.log(isPalindrome(x))
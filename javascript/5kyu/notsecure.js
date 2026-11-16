
// The string has the following conditions to be alphanumeric:
// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore



// ^ to start checking the characters one by one
// + means don't stop at just one character upto the last end
// $ means to check and the $ is the very end of the string input
//test means to check if it matches

function alphanumeric(string){
  return /^[a-zA-Z0-9]+$/.test(string);
}

console.log(alphanumeric("Mazinkaiser"));  //true
console.log(alphanumeric("hello world_")); //false
console.log(alphanumeric("            "));  //false
console.log(alphanumeric("PassW0rd"));      //true




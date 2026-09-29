// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"



// Time 
// Feedback 
// Note taking  


//a-z = 97 - 122
//A-Z = 65- 90

function alphabetPosition(text) {
  let arr = text.toLowerCase()
  console.log(arr);
  let results = [];
  
  for (let i = 0; i<arr.length; i++){
  
    results.push(arr.charCodeAt(i)-96);
    
  }
   
  return results;
}
console.log(alphabetPosition("a b c"));

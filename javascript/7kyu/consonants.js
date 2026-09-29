
// /w  word charater
// /d digits
function consonantCount(str) {
   let input = str.split("") 
  let vowels = /[^aeiou\w\d_]/i
  let count = 0;
  for (let i= 0; i< input.length; i++){
    if (input[i].match(vowels))
        count++

  }
  return count;


}

console.log(consonantCount("01234567890_"));
console.log(consonantCount(" ^&$#"));
console.log(consonantCount("aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#"));



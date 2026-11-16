// https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript

// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"


function onlyDuplicates(str) {
  let obj = {}
  let list = str.split("")
  let results = [];
  for (let i = 0; i<list.length; i++){
    let array = list[i]
     if (obj[array]){
    obj[array]++
  }
  else {
    obj[array]=1;
  }
  }

  
for (let k = 0; k<list.length; k++){
    let chars = list[k];    
    if(obj[chars]>1){
        results.push(chars)
    }
}


  return results.join("")
 
}

console.log(onlyDuplicates('abccdefee'));  // cceee
console.log(onlyDuplicates('colloquial')); // ollol
console.log(onlyDuplicates('hello')); // ll
console.log(onlyDuplicates('foundersandcoders'));  // ondersndoders'




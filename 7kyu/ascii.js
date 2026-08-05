// https://www.codewars.com/kata/59706036f6e5d1e22d000016

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.


// "a"===97
function wordsToMarks(string){
    let array = string.toLowerCase().split("");


console.log(array);

  let results = array.map((ele,index)=>{
    return ele.charCodeAt()-96;
  })
  console.log(results);

  return results.reduce((acc,ele,index,arr)=>{
    return acc+ele;
  },0)
  
}

console.log(wordsToMarks("friends"));
console.log("a".charCodeAt(0));


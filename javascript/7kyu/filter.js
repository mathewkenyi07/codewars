
// https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


function filterString(value) {
  let input = value.split("");
  let results = [];

  
  for (let i = 0; i < input.length; i++){
    if (input[i] >= "0" && input[i] <= "9"){
      results.push(input[i]);
    }

  }
  return Number(results.join(""));
}

console.log(filterString("123"));
console.log(filterString("a1b2c3"));


// https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/train/javascript

// Remove the parentheses
// In this kata you are given a string for example:

// "example(unwanted thing)example"
// Your task is to remove everything inside the parentheses as well as the parentheses themselves.

// The example above would return:

// "exampleexample"

function removeParentheses(s) {
  let first;
  let last;
  let noDeleted;

  let array = s.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "(") {
      first = i;
    }
    if (array[i] === ")") {
      last = i;
    }
  }
  console.log(first);
  console.log(array[first]);

  console.log(last);
  console.log(array[last]);
  console.log(array.join(""));
  noDeleted = last-first+1;

  array.splice(first, noDeleted);
  return array.join("");
}

console.log(removeParentheses("example(unwanted thing)example"));

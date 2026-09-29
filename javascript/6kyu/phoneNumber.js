
function createPhoneNumber(numbers) {
  let results = [];
  let count = 0;

  results.push("(");

  for (let i = 0; i < numbers.length; i++) {
    results.push(numbers[i]);
    count++;

    if (count === 3) {
      results.push(") ");
    }

    if (count === 6) {
      results.push("-");
    }
  }

  return results.join("");
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
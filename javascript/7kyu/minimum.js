// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  let smallest = numbers[0];
  let results;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }

  let index = numbers.indexOf(smallest);
  let before = numbers.slice(0, index);
  let after = numbers.slice(index + 1);
  
  results = before.concat(after);

  return results;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));

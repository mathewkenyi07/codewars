function uniqueInOrder(iterable) {
  let array;
  if (Array.isArray(iterable)) {
    array = iterable;
  } else {
    array = iterable.split("");
  }
  let results = [];
  let dump = [];
  let track;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== track || results.length === 0) {
      results.push(array[i]);
      track = array[i];
    } else {
      dump.push(array[i]);
    }
  }
  return results;
}
console.log(uniqueInOrder("AAAABBBCCDAABBB")); //'A', 'B', 'C', 'D', 'A', 'B'
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([undefined, undefined, 'foo', 'bar', undefined, undefined ]));//[ undefined, 'foo', 'bar', undefined ]

function highAndLow(numbers){
  let arr = numbers.split(" ");
  let high = arr.sort((a,b)=>b-a)[0]
  console.log(high);

  
  
  let low = arr.sort((a,b)=>a-b)[0]
   console.log(low);
  

  let results = [high,low].join(" ")
  return results
  
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));



// describe("Example tests", () => {
//   it("Test 1", () => {
//     assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
//   });
//   it("Test 2", () => {
//     assert.strictEqual(highAndLow("1 2 3"), "3 1");
//   });
// });
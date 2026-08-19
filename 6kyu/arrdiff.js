// If a = [1, 2] and b = [1], the result should be [2].

// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

function arrayDiff(a, b) {

    if (b.length===0) return a;
    if (a.length===0) return a;
    let results = a.filter(ele=>!b.includes(ele))
    return results;
    
    
}
console.log(arrayDiff([1,2],[1]));   //[2]
console.log(arrayDiff([1, 2, 2, 2, 3],[2])); //[1,3]
console.log(arrayDiff([1,2,3],[]));  //[1,2,3]
console.log(arrayDiff([],[1,2]));  //[]
console.log(arrayDiff([1,2,3],[1,2]));//3






//  assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
//     assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
//     assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
//     assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
//     assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
//     assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]"


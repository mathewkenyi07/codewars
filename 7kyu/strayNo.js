// find the stray number in the array
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    let count = 0;
    let num2 = new Set(numbers);
    num2 = [...num2]
    console.log(num2);
    for (let i = 0; i < numbers.length; i++) {
        if (num2[0] === numbers[i]) {
            count++
        }
    }

    if (count === 1) {
        return num2[0]
    } else {
        return num2[1]
    }


}

console.log(stray([17, 17, 3, 17, 17, 17, 17]));
console.log(stray([1,2]));







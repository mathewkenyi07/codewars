// if the array value is palindrom change it with 1 and if it's not change it with 0
// [101, 2, 85, 33, 14014]  ==>  [1, 1, 0, 1, 0]
// [45, 21, 303, 56]        ==>  [0, 0, 1, 0]


function convertPalindromes(numbers) {
    let results = numbers.map((elem, index, arr) => {
        let string = elem.toString();
        let reversed = string.split("").reverse().join("");
        if (string === reversed) {
            return 1
        }
        else {
            return 0
        }

    })
    return results;

};
console.log(convertPalindromes([101, 2, 85, 33, 14014]));
console.log(convertPalindromes([45, 21, 303, 56]));


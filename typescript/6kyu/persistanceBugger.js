export function persistence(num) {
    //  let str : string = num.toString()
    //  let strArray : string[] = str.split("")
    //  let arr : number[] = strArray.map(Number)
    //  let length = arr.length;
    let count = 0;
    let currentNumber = num;
    while (currentNumber >= 10) {
        let arr = currentNumber.toString().split("").map(Number);
        currentNumber = arr.reduce((acc, current) => acc * current, 1);
        console.log(currentNumber);
        count++;
    }
    return count;
}
console.log(persistence(200763));

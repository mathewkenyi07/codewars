// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 



function duplicateEncode(word){
    let array = word.toLowerCase().split("");
    let obj = {};
    let results = [];
    for (let i = 0; i<array.length; i++){
        let current = array[i];
        if (obj[current]){
            obj[current]++;
        }
        else {
            obj[current] = 1;
        }
    }
    console.log(obj);

    for (let k = 0; k < array.length; k++){
        let current = array[k];

        if (obj[current]>1){ 

            results.push(")");

        }
        else {
            results.push("(");
        }
    }

    return results.join("");
    
}

console.log(duplicateEncode("din"));  // (((
console.log(duplicateEncode("recede")); // ()()()
console.log(duplicateEncode("Success"));  // )())())
console.log(duplicateEncode("(( @"));  // ))((




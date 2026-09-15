// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


// function toCamelCase(str){
//     let array = str.split("")
//     console.log(array);
//     let results = [];
//     for (let i = 0; i<= array.length-1; i++){
//         if (array[i] === "-" ){
//             results.push(array[i+1].toUpperCase())
//             i++;
//         }
//         else if (array[i] === "_"){
//             if (array[i+1].toUpperCase()){
//                 results.push(array[i+1])
//             i++;

//             }
//             else{
//                 results.push(array[i+1].toUpperCase())
//             }
            
//         }


//         else {
//             results.push(array[i])
//         }
//     }

//     return results.join("");
    

// }
console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));
console.log(toCamelCase("the_stealth_warrior"));


function toCamelCase(str) {
    let array = str.split("")
    let results = [];

    for (let i = 0; i <= array.length - 1; i++) {

        if (array[i] === "-" || array[i] === "_") {
            results.push(array[i + 1].toUpperCase())
            i++;
        }

        else {
            results.push(array[i])
        }
    }

    return results.join("");
}
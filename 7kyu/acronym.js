// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:




function toAcronym(inp) {
    let array = [];
    let results = inp.split(" ");
    for (let letter of results) {
        let first = letter.at(0).toUpperCase();
        array.push(first)


    }
return array.join("");


}
console.log(toAcronym("Code Wars"));


// test
//   ["Code Wars", "CW"],
//       ["Water Closet", "WC"],
//       ["Portable Network Graphics", "PNG"],
//       ["PHP: Hypertext Preprocessor", "PHP"],
//       ["hyper text markup language", "HTML"]
//     ];
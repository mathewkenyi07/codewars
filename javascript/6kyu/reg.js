// has atlease one character
// all upper and lower case are allowed and latin characters
// No white space and underscore


// function alphanumeric(string){
//   if (string === "") return false;
//   else{
//     let words = string.toLowerCase();
//         console.log(words);
//         if (/0-9/.test(words)){
//             return true
//         }
//         if (/\s/.test(words)){
//             return false
//         }
//         if (/_/.test(words)){
//             return false;
//         }
//   }

// }  

// console.log(alphanumeric(""));

// /0-9/  numbers 0-9
// /\s/  white space 
// /_/   underscore



function alphanumeric(string) {
    if (string === "") return false;

    let words = string.toLowerCase();

    if (/[^a-z0-9]/.test(words)) {
        return false;
    }
    if (/\s/.test(words)) {
        return false;
    }
    if (/_/.test(words)) {
        return false;
    }

    return true;
}

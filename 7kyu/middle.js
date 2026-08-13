// You are going to be given a non-empty string. Your job is to return the middle character(s) 
// of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"


function getMiddle(s) {
 let arr = s.split("");
 console.log(arr);
 if (arr.length===1) return arr.join("")
 if (arr.length%2===0){
        let first = arr[arr.length/2-1];
        let second = arr[arr.length/2];
        let results = first + second;
        return results
        
                
 }

  else {
    let size = Math.floor(arr.length/2);
    return  arr[size];  
 }
 
}

console.log(getMiddle("t"));

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.


// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


//a-z 97 - 122
//A-Z 65-90
function duplicateCount(text){
   let small = text.toLowerCase()
   let codes = [];
   let results = {}

   for (let i =0; i<= small.length-1; i++){
     codes.push(small.charCodeAt(i))
   }

   for (let j = 0; j<=codes.length-1; j++){
    let num = codes[j]
    if (results[num]){
        results[num]++
    }
    else{
        results[num]=1
    }

   }
   let count = 0
   console.log(results);
   

   for (let [key,value] of Object.entries(results)){
    if (value>1){
        count++
    }
   }

    
 return count;
   
}

console.log(duplicateCount("ABcdEF"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("indivisibility" ));
console.log(duplicateCount("aA11"));





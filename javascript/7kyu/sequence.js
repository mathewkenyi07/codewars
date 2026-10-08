// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).



// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"

function freqSeq(str, sep) {

    let obj = {}
      let results = []
      let final = []

    for (let i = 0; i<str.length; i++){
        let current = str[i]
        if (obj[current]){
            obj[current]++
        }
        else{
            obj[current] = 1;
        }
    }
    for (let j=0; j<str.length; j++){
        let current = str[j]
        results.push([current,obj[current]])
    }
console.log(obj);

let results2 = results.flat(Infinity)
console.log(results2);
 
for (let k = 0; k<str.length; k++){
    final.push(results2[(k*2)+1])
    final.push(sep)
}
final.pop()
return final.join("")

}
// console.log(freqSeq("hello world","-" ));
// console.log(freqSeq("19999999",":"));
console.log(freqSeq("^^^**$","x"));


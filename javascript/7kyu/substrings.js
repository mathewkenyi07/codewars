// "Something", "Fun"  ==> false
// // because "something" and "fun" contain no common substrings
// // (We do not count the 'n' as a substring in this Kata,
// // because it is only 1 character long)

// "Something", "Home" ==> true
// // because both of the strings contain the substring `"me"`
// // (so**ME**thing and ho**ME**).


//substring() is an inbuilt method that extracts characters from a string btn two specific locations without 
//modifying the original string


function substringTest(str1, str2) {
    let first = str1.toLowerCase();
    let second = str2.toLowerCase();

    for (let i = 0; i < first.length - 1; i++) {
        let pair = first.substring(i, i + 2);
        console.log(pair);
        

        if (second.includes(pair)) {
            return true;
        }
    }

    return false;
}
console.log(substringTest("Something","Fun"));

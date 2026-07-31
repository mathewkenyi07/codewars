
// write a function to check the input is a palindrome

function isPalindrome(x) {
    x = x.toLowerCase();
    let results = x.split("").reverse().join("");
    if (results === x) {
        return true;
    }
    else {
        return false;
    }

}
console.log(isPalindrome("Madam"));



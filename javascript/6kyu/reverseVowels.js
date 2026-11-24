// https://www.codewars.com/kata/585db3e8eec141ce9a00008f/train/javascript
// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"

function reverseVowels(str) {
  let vowels = /[aieou]/i;
  let string = str.split("");
  let array = [];
  let results = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i].match(vowels)) {
      array.push(string[i]);
    }
  }
  let reversed = array.reverse();
  let m = 0;

  for (let k = 0; k < string.length; k++) {
    if (string[k].match(vowels)) {
      results.push(reversed[m]);
      m++;
    } else {
      results.push(string[k]);
    }
  }

  return results.join("");
}
console.log(reverseVowels("Hello"));
console.log(reverseVowels("Tomatoes"));

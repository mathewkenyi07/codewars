// https://www.codewars.com/kata/56b3b27cadd4ad275500000c/train/javascript
// Kate likes to count words in text blocks. By words she means continuous sequences of English alphabetic characters (from a to z ). Here are examples:
// Hello there, little user5453 374 ())$. I'd been using my sphere as a stool. Slow-moving target 839342 was hit by OMGd-63 or K4mp. contains "words" ['Hello', 'there', 'little', 'user', 'I', 'd', 'been', 'using', 'my','sphere', 'as', 'a', 'stool', 'Slow', 'moving', 'target', 'was', 'hit', 'by', 'OMGd', 'or', 'K', 'mp']
// Kate doesn't like some of words and doesn't count them. Words to be excluded are "a", "the", "on", "at", "of", "upon", "in" and "as", case-insensitive.
// Today Kate's too lazy and have decided to teach her computer to count "words" for her.

function wordCount(s) {
  let excluded = ["a", "the", "on", "at", "of", "upon", "in", "as"];

  let words = s.match(/[a-zA-Z]+/g) || [];
  console.log(words);

  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let current = words[i].toLowerCase();
    if (!excluded.includes(current)) {
      count++;
    }
  }

  return count;
}

console.log(wordCount("hello there"));
console.log(wordCount("hello there and a hi the"));
console.log(wordCount("Slow-moving user6463 has been here"));


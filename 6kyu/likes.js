// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the arr of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(arr) {
    let length = arr.length;
    
    let msg = `likes this`;
    let msg2 = `like this`;
    if (length<1){
        return `no one ${msg}`;
    }
    else if (length === 1){
        return `${arr[0]} ${msg}` 
    }
    else if (length ===2 ){
        return `${arr[0]} and ${arr[1]} ${msg2}`;
    }
    else if (length === 3 ){
        return `${arr[0]}, ${arr[1]} and ${arr[2]} ${msg2}`;
    }
    else if (length > 3){
        return `${arr[0]}, ${arr[1]} and ${length-2} others ${msg2}`;
    }

}
console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"] ));
console.log(likes(["Matt","ken","jenny","edina","keji","isaac"]));






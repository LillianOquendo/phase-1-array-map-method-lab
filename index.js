const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];
//declare the function titleCased that returns an array with title case tutorial names AKA every inital letter in the title is capitalized

//combine the map and split method to make a new array with the same
//array elements and break the strings into individual words

//use charAt(0) to indicate the first letter of each word and toUpperCase to capitalize it
//use.join or add variables together??

const titleCased = () => {
  return tutorials.map((sentence) => {
    let words = sentence.split(" ");
      let newWords = words.map((word) => {
      let newArray1 = word.charAt(0).toUpperCase();
      let newArray2 = word.slice(1).toLowerCase();

      let finalArray = newArray1 + newArray2;
    
        return finalArray;
    });
    return newWords.join(' ');
  });
};

console.log(titleCased());

//read from top to bottom to see how tutorials was broken up edited and then rejoined 

let text = "Please visit Twitter!";
let newText = text.replace("Microsoft", "Autodidact!");
console.log(newText)


let cats = "I love cats. Cats are very easy to love. Cats are very popular.";
let dogs = cats.replaceAll("/cats/g","dogs"); //If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.
console.log(dogs)
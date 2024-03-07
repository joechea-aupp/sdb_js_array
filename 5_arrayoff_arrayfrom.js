let myArray = new Array("Apple", "Banana", "Cherry");
console.log(myArray);

let numArray = new Array(10);
console.log(numArray);

let num2Array = Array.of(10);
console.log(num2Array);

const isPalindrome = (word) => Array.from(word).reverse().join("") === word;
console.log(isPalindrome("madam"));

const getArrauArgs = function () {
  return Array.from(arguments);
};

console.log(getArrauArgs(1, 2, 3, 4, 5));

const iLoveIceCream = (flavorArray) =>
  Array.from(flavorArray, (elem) => `I love ${elem} ice cream`);

console.log(iLoveIceCream(["chocolate", "vanilla", "strawberry"]));

const randomNums = (count) =>
  Array.from(new Array(count), () => Math.floor(Math.random() * 10000));

console.log(randomNums(10));

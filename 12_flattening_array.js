const coords_1 = [
  [0, 3],
  [4, 7],
  [1, 2],
  [8, 9],
  [
    [1, 2],
    [6, 9],
  ],
  [
    [1, 2],
    [6, 9],
  ],
  [1, 2],
];

const flatArr = coords_1.flat(2);
console.log(flatArr);

// const flatArr = coords_1.flat(Infinity);

const sentences = ["Hello world", "Goodbye moon", "Welcome sun"];

const words = sentences.flatMap((sentence) => sentence.split(" "));

console.log(words);

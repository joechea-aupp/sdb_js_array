const arrA = [1, 2, 3, 4, 1, { id: 1 }, { id: 2 }, "Hello"];
const arrB = [1, 2, 3, 4, 1, { id: 1 }, { id: 2 }, "Hello"];

const isIdentical = (arrA, arrB) => {
  JSON.stringify(arrA) === JSON.stringify(arrB);
};

console.log(isIdentical(arrA, arrB));

const hasSameContents = (arrA, arrB) => {
  const stringA = arrA.map((el) => JSON.stringify(el));
  const stringB = arrB.map((el) => JSON.stringify(el));

  return [
    arrA.length === arrB.length,
    ...stringA.map((el) => stringB.includes(el)),
    ...stringB.map((el) => stringA.includes(el)),
  ].every((el) => el);
};

console.log(hasSameContents(arrA, arrB));

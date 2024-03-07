const numArray = [2, 3, 12, 23, 34, 9, 55, 54.5];
// const asc = numArray.sort((a, b) => a - b);
// const desc = numArray.sort((a, b) => b - a);
// console.log(asc);
// console.log(desc);

// shallow copy spread
const ascSpread = [...numArray].sort((a, b) => a - b);
const descSpread = [...numArray].sort((a, b) => b - a);

console.log(ascSpread);
console.log(descSpread);

const employees = [
  {
    id: 1,
    name: "John Doe",
    age: 31,
    position: "Manager",
  },
  {
    id: 2,
    name: "Dennis McKellan",
    age: 32,
    position: "Team Lead",
  },
  {
    id: 3,
    name: "Edward Deeney",
    age: 48,
    position: "Senior Developer",
  },
  {
    id: 4,
    name: "Laurene Mandel",
    age: 45,
    position: "Senior Developer",
  },
];

const displayList = (arr, sortFn) =>
  sortFn([...arr]).forEach((elem) =>
    console.log(`${elem.name} | ${elem.age} years old`)
  );

const byAgeAsc = (arr) => arr.sort((a, b) => a.age - b.age);
const byNameAsc = (arr) =>
  arr.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));

displayList(employees, byNameAsc);

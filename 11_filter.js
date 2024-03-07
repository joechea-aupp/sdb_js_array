const numArray = [2, 3, 12, 23, 34, 9, 55, 54.5];
const evenNums = numArray.filter((elem) => elem % 2 === 0);
console.log(evenNums);

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

console.log(employees.filter((elem) => elem.age > 25));

const findEmployee = ([pros, val], arr) =>
  arr.filter((elem) => elem[pros] === val);

console.log(findEmployee(["position", "Senior Developer"], employees));

const porducts = [
  {
    name: "HEPA Filter",
    isAvailable: true,
  },
  {
    name: "Car Air Freshener",
    isAvailable: false,
  },
  {
    name: "Air Purifier",
    isAvailable: true,
  },
  {
    name: "Air Quality Monitor",
    isAvailable: false,
  },
];

const isAvailable = porducts.filter((elem) => elem.isAvailable);
console.log(isAvailable);

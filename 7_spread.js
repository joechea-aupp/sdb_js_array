// Cloning Arrays
const items = ["Mouse", "Keyboard", "Monitor", "Mic", "Camera"];
const itemsCopy = items;
const itemsClone = [...items];

itemsCopy.push("Headphones");

console.log(`ITEMS: ${items}`);
console.log(`ITEMS COPY: ${itemsCopy}`);
console.log(`ITEMS CLONE: ${itemsClone}`);

// Concatenating Arrays
let primaryColors = ["red", "green", "blue"];
let secondaryColors = ["orange", "green", "violet"];
let colorWheel = [...primaryColors, ...secondaryColors];
console.log(colorWheel);

// add todo constructor
const Tasks = function (title) {
  this.title = title ?? "My Tasks";
  this.taskList = [];
  this.showTasks = function () {
    console.log(`-------${this.title}-------`);
    this.taskList.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  };

  this.add = function (item) {
    this.taskList = [item, ...this.taskList];
  };
};

const myTasks = new Tasks("My Daily Tasks");
myTasks.add("Wake up");
myTasks.add("Brush teeth");

myTasks.showTasks();

//  using spread for function arguments

const numArray = [
  [2, 3],
  [4, 5],
  [6, 7],
];

const isGreater = (a, b) =>
  a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`;

numArray.forEach((elem) => console.log(isGreater(...elem)));

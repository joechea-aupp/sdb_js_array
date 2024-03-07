const keys = ["XDC-102-2206", "XDC-754-1510", "XDC-998-0311"];
const dateStrings = keys.map((elem) => elem.slice(8));
console.log(dateStrings);

const keyCodes = keys.map((elem) => elem.slice(4, 7));
console.log(keyCodes);

const desk = ["Laptop", "Monitor", "Keyboard", "Mouse", "Printer"];
desk.splice(3, 1, "Webcam");
console.log(desk);

const desk2 = ["Laptop", "Monitor", "Keyboard", "Mouse", "Printer"];

const move = (arr, start, count, moveTo) => {
  const clone = [...arr];
  clone.splice(moveTo, 0, ...clone.splice(start, count));
  return clone;
};

let newDesk3 = move(desk2, 3, 1, 1);
console.log(newDesk3);

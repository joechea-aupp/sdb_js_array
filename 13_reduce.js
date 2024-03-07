const numArray = [1, 2, 3, 4, 5];
const reduced = numArray.reduce((acc, elem) => acc + elem, 0);
console.log(reduced);
const cart = [
  {
    item: "Laptop",
    price: 1000,
    quantity: 1,
  },
  {
    item: "Mouse",
    price: 50,
    quantity: 2,
  },
  {
    item: "Keyboard",
    price: 150,
    quantity: 1,
  },
];

const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
console.log(total);

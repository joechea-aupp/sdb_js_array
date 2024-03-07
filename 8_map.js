const numArray = [
  [2, 3],
  [12, 23],
  [34, 9],
  [55, 54.5],
];

// const toSum = (arr) => arr.map((elem) => elem[0] + elem[1]);
const toSum = (arr) => arr.map(([a, b]) => a + b);

console.log(toSum(numArray));

const users = [
  {
    first_name: "Maynord",
    last_name: "Farrance",
    email: "mayf@gmail.com",
  },
  {
    first_name: "Nikos",
    last_name: "Mossop",
    email: "xxaa@gmail.com",
  },
  {
    first_name: "Elspeth",
    last_name: "MacLice",
    email: "elmac@gmail.com",
  },
  {
    first_name: "Glad",
    last_name: "Mossop",
    email: "glad.mop@email.com",
  },
];

const genId = () => Math.floor(Math.random() * 10000);
const withIds = users.map((user) => {
  return {
    id: genId(),
    ...user,
  };
});

console.log(withIds);

// unpack array to variables
let joe = ["Joe Mandell", 32, "Banker"];
let [user, , job] = joe;
console.log(user, job);

let isLoading = true;
let showUI = false;

[isLoading, showUI] = [showUI, isLoading];
console.log(isLoading, showUI);

let resturants = [
  {
    name: "The Bao Boat",
    category: "Oriental",
    city: "New York",
  },
  {
    name: "Imperial Diner",
    category: "Continental",
    city: "Los Angeles",
  },
];

const findDetails = (name, arr) => {
  let findPlace = arr.find((elem) => elem.name === name);
  return findPlace ? [findPlace.category, findPlace.city] : [];
};

let [category, city] = findDetails("Imperial Diner", resturants);
console.log(category, city);

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
let [pie, smoothie, ...rest] = fruits;

console.log(rest);

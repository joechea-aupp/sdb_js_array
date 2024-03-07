const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    age: 31,
    speciality: "General Physician",
  },
  {
    id: 2,
    name: "Dr. Dennis McKellan",
    age: 32,
    speciality: "Cardiologist",
  },
  {
    id: 3,
    name: "Dr. Edward Deeney",
    age: 48,
    speciality: "Oncologist",
  },
  {
    id: 4,
    name: "Dr. Laurene Mandel",
    age: 45,
    speciality: "Dermatologist",
  },
];

const findDoctor = (speciality, arr) =>
  arr.find((elem) => elem.speciality === speciality)?.name || "No doctor found";

console.log(findDoctor("Cardiologist", doctors));
console.log(findDoctor("Neurosurgeon", doctors));

const colorType = (color) => {
  const primaryColors = ["red", "green", "blue"];
  const secondaryColors = ["orange", "green", "violet"];

  //   if (primaryColors.includes(color)) {
  //     return `${color} is a primary color`;
  //   } else if (secondaryColors.includes(color)) {
  //     return `${color} is a secondary color`;
  //   } else {
  //     return `${color} is not a primary or secondary color`;
  //   }
  // or
  return primaryColors.includes(color)
    ? `${color} is a primary color`
    : secondaryColors.includes(color)
    ? `${color} is a secondary color`
    : `${color} is not a primary or secondary color`;
};

console.log(colorType("dark blue"));

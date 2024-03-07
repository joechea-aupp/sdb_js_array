const books = ["The Lord of the Rings", "Deception", "Dune", "The Hobbit"];

// for (const book of books) {
//   console.log(book);
// }

// or
// const eachBook = (book, index) => {
//   console.log(`${index + 1}. ${book}`);
// };

// books.forEach((book, index) => {
//   console.log(`${index + 1}. ${book}`);
// });

// books.forEach(eachBook);

const users = `Name,Email,Phone,Address,Age
John Doe,johndoe@example.com,555-1234,123 Main St,30
Jane Smith,janesmith@example.com,555-5678,456 Elm St,25
Michael Johnson,michaeljohnson@example.com,555-9012,789 Oak St,35
Emily Brown,emilybrown@example.com,555-3456,101 Pine St,28
David Lee,davidlee@example.com,555-7890,246 Maple St,40
Sarah Wilson,sarahwilson@example.com,555-2345,369 Birch St,32
`;

const csvToArray = (csv) => {
  let output = [];
  csv.split("\n").forEach((row) => output.push(row.split(",")));
  return output;
};

const convertToObj = (arr) => {
  let output = [];
  arr.forEach((elem, index) => {
    if (index !== 0) {
      let obj = {};
      elem.forEach((elem, index) => {
        obj[arr[0][index]] = elem;
      });

      output.push(obj);
    }
  });

  return output;
};

let csvToObj = convertToObj(csvToArray(users));

// console.log(csvToObj);

const prices = [100, 210, 230, 102, 23];
const Tax = function (tax) {
  this.tax = tax;
  this.withTax = function (arr) {
    let output = [];
    // arr.forEach(function (elem) {
    //   let withTax = (this.tax / 100) * elem + elem;
    //   output.push(withTax);
    // }, this);
    // or
    arr.forEach((elem) => {
      let withTax = (this.tax / 100) * elem + elem;
      output.push(withTax);
    });
    return output;
  };
};

const gst5 = new Tax(5);
console.log(gst5.withTax(prices));

// convert string to array
const str = "House No. 98, Phillip Stree, Mangrove Drive, Timberville - 800123";
console.log(str.split(", "));

// convert array to string
const greet = ["Hello!", "How are you?", "It is so nice to meet you again!"];
console.log(greet.join(" "));

// using join and split to check for Palindrome
const isPalindrome = (word) => word.split("").reverse().join("") === word;
console.log(isPalindrome("madam") ? "is a palindrome" : "is not a palindrome");

// process comma separated values
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
  for (const row of csv.split("\n")) {
    output.push(row.split(","));
  }

  return output;
};

console.table(csvToArray(users));

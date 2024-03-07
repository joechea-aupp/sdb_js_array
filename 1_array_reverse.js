// reverse is a mutate array method
const isPalindrome = (word) => {
  let wordArr = [];
  let revWord = [];

  for (const w of word) {
    wordArr.push(w);
    revWord.push(w);
  }

  return wordArr.toString() === revWord.reverse().toString();
};

console.log(isPalindrome("madam") ? "is a palindrome" : "is not a palindrome");

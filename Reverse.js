var string = "I am Ayush Mahajan";

var reverseWords = reverseWords(string)
console.log(reverseWords);

function reverseWords(str) {
  let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}
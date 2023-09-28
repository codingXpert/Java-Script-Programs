// function reverseString(str) {
//   let revStr = "";
//   let len = str.length;
//   for (let i = len - 1; i >= 0; i--) {
//     // revStr = revStr + str.charAt(i);
//     revStr = revStr + str[i];
//   }
//   return revStr;
// }
// const inputString = "ABCD"
// console.log(reverseString(inputString));




//using inbuilt method()
function reverseString(str) {
  let strArray = str.split(''); // converting the string to string array
  strArray.reverse();
  return strArray;
}
const inputString = "ABCD"
console.log(reverseString(inputString));

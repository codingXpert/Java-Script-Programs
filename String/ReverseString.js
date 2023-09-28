function reverseString(str) {
  let revStr = "";
  let len = str.length;
  for (let i = len - 1; i >= 0; i--) {
    // revStr = revStr + str.charAt(i);
    revStr = revStr + str[i];
  }
  return revStr;
}
const inputString = "ABCD"
console.log(reverseString(inputString));

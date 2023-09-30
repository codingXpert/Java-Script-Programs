function tripletSum(arr, x) {
  const length = arr.length;
  const targetSum = x;
  let count = 0;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        let tripletSum = arr[i] + arr[j] + arr[k];
        if (tripletSum == targetSum) {
          console.log("(", arr[i], ":", arr[j], ":", arr[k], ")");
          count++;
        }
      }
    }
  }
  return count;
}
const result = tripletSum([0, 1, 2, 3, 4, 5, 6], 6);
console.log("Target Sum Count: ", result);

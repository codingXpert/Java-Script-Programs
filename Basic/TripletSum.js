// function tripletSum(arr, x) {      //time complexity O(n^3)
//   const length = arr.length;
//   const targetSum = x;
//   let count = 0;
//   for (let i = 0; i < length-2; i++) {
//     for (let j = i + 1; j < length-1; j++) {
//       for (let k = j + 1; k < length; k++) {
//         let tripletSum = arr[i] + arr[j] + arr[k];
//         if (tripletSum == targetSum) {
//           console.log("(", arr[i], ":", arr[j], ":", arr[k], ")");
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// }
// const result = tripletSum([0, 1, 2, 3, 4, 5, 6], 6);
// console.log("Target Sum Count: ", result);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Method 2:- Optimized Method(time complexity n^2)
function tripletSum(Arr, x) {
  const arr = Arr.sort();
  const length = arr.length;
  let result = [];

  for (let i = 0; i < length; i++) {
    let left = i + 1;
    let right = length - 1;
    const targetSum = x;

    while (left < right) {

      // check for distinct(unique) TripletSum elements(optional)
      while (arr[left] == arr[left + 1]) {
        left++;
      }
      while (arr[right] == arr[right - 1]) {
        right--;
      }
      while (arr[i] == arr[i + 1]) {
        i++;
      }

      //finding triplet sum
      const sum = arr[i] + arr[left] + arr[right];
      if (sum > targetSum) {
        right--;
      } else if (sum < targetSum) {
        left++;
      } else {
         result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      }
    }
  }
  return result;
}
const output = tripletSum([0,1, 1, 2, 2, 3, 4, 4, 5, 6], 6);
console.log(output);

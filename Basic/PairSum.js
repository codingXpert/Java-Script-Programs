// function pairSum(arr,x) {
//     const length = arr.length; //time complexity of O(n^2)
//     const targetSum = x;
//     let count = 0;
//     for(let i=0; i<length;i++){
//         for(let j=i+1;j<length;j++){
//             let pairSum = arr[i] + arr[j];
//             if(pairSum == targetSum){
//                 console.log( "(" ,arr[i], ":" ,arr[j], ")" );
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// const result = pairSum([0,1,2,3,4,5,6],6)
// console.log("Target Sum Count: ", result);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Method 2:- optimized method(array must be sorted) time complexity of O(n)
function pairSum(Arr, x) {
  const arr = Arr.sort();
  let result = [];
  const targetSum = x;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {

    // check for distinct(unique) pair(optional)
    while (arr[left] == arr[left + 1]) {
      left++;
    }
    while (arr[right] == arr[right - 1]) {
      right--;
    }

    //finding pairs
    let pairSum = arr[left] + arr[right];
    if (pairSum === targetSum) {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (pairSum > targetSum) {
      right--;
    } else {
      left++;
    }
  }
  return result
}
const output = pairSum([1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 4, 3, 5, 1, 0, 2], 4);
console.log(output);

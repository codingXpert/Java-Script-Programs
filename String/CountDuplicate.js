function countDuplicates(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    }
  }
  return count;
}
console.log("Total Duplicate", countDuplicates("122334"));
console.log("Total Duplicate", countDuplicates([1, 2, 2, 3, 4, 4, 5, 5]));
console.log("Total Duplicate", countDuplicates(["A", "A", "B", "C", "C"]));

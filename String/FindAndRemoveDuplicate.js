function findAndRemoveDuplicates(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
  
      for (let j = 0; j < result.length; j++) {
        if (arr[i] === result[j]) {
          isDuplicate = true;
          break;
        }
      }
  
      if (!isDuplicate) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
console.log(findAndRemoveDuplicates([1,2,2,3,4,4,5,5]));
console.log(findAndRemoveDuplicates(['A','A','B','C','C']));
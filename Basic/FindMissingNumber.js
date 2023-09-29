/* RULES

 array should lie b/w [0, .... ,n]
 array should not contain any duplicate and -ve value.
 array may be in sorted or in mixed formate.
 array should be in a range

*/



function findMissingNumber(num) {
    const length = num.length;
    let originalSum = (length * (length + 1))  / 2;
    console.log(originalSum);
    let calculatedSum = 0;
    num.forEach((val) => {
        calculatedSum += val;
    }) ;
    return originalSum - calculatedSum;
}
console.log(findMissingNumber([1,0,2,3,5]));

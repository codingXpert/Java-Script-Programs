function reverseStringArray(str) {
    let arr = str;
    let len = arr.length-1;
    for(let i=0;i<len;i++){
        let temp = arr[i];
        arr[i] = arr[len-i];
        arr[len-i] = temp;
    }
    return arr;
}
console.log(reverseStringArray(["A","B","C"]));
console.log(reverseStringArray([1,2,3]));
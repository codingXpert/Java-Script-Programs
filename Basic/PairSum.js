function pairSum(arr,x) {
    const length = arr.length;
    const targetSum = x;
    let count = 0;
    for(let i=0; i<length;i++){
        for(let j=i+1;j<length;j++){
            let pair = arr[i] + arr[j];
            if(pair == targetSum)
            count++;
        }
    }
    return count;
}
console.log(pairSum([0,1,2,3,4,5,6],1));
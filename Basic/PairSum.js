function pairSum(arr,x) {
    const length = arr.length;
    const targetSum = x;
    let count = 0;
    for(let i=0; i<length;i++){
        for(let j=i+1;j<length;j++){
            let pairSum = arr[i] + arr[j];
            if(pairSum == targetSum){
                console.log( "(" ,arr[i], ":" ,arr[j], ")" );
                count++;
            }   
        }
    }
    return count;
}
const result = pairSum([0,1,2,3,4,5,6],6)
console.log("Target Sum Count: ", result);
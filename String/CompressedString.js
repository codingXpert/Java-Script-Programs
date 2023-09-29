function compressedString(str) {
    const strLength = str.length;
    let occurrence = ''
    let count = 1;
    for(let i = 0; i <= strLength; i++){
        if(str[i] === str[i+1]){
            count++;
        }else{
            occurrence += str[i] + count;
            count =1;
        }
    }
    return occurrence;
}

console.log(compressedString('AABBC'));  //A2B2C1
console.log(compressedString(["A","A","B","B","C"])); //A2B2C1
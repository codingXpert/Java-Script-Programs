function stringFrequency(str) {
    const strObj = {};
    let maxKey = '';
    const len = str.length;
    for(let i=0; i<len; i++){
        let key = str[i];
        if(!strObj[key]){
            strObj[key] = 0;
        }
        strObj[key]++;
        if(maxKey== '' || strObj[key] > strObj[maxKey]){
            maxKey = key;
        }
    }
    console.log("maxKey:", maxKey);
    return strObj;
}
console.log(stringFrequency("Hello Indu"));

function palindrome (number){
    let num = number;
    let reversedNo = 0;
    while(number != 0) {
        let reminder = number % 10;
        reversedNo = reversedNo * 10 + reminder;
        number = Math.floor(number / 10);
    }
    if(reversedNo === num){
        return true;
    } return false;
}
console.log(palindrome(1213));
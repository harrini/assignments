
function checkNumberType(number) {

    if (number>0) {
    return "The number is greater than 0 ";
}
     else if(number<0) {
        return "The number is lesser than 0";

}
    else {
        return"The number is 0";

}
}
let number = -1;
let numberType = checkNumberType(number);
console.log(numberType);


function sumFn(val){
    let sum = 0

    for(let i=0;i<=val;i++){
        sum = sum+i;   
        console.log(sum); 
    }
    return sum;
}
let val = 10;
let result = sumFn(val);
console.log(result);




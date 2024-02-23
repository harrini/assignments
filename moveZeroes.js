function moveZeros(nums){

    let nonZeroElements = 0;

    for (i=0; i<nums.length; i++){

        if(nums[i]!==0){
            //Swapping the number to move the Zeroes to the end
            [nums[i], nums[nonZeroElements]] = [nums[nonZeroElements] , nums[i]];
            nonZeroElements++ ;         
        }
    }
}

let nums = [0,1,0,3,12];
moveZeros(nums);
console.log(nums);

//Example 2:

function moveZeroes(number){

    const non0Elements = number.filter(number=> number!==0);

    const numOfZeroes = number.length - non0Elements.length;

    //Concatenate these 2 with required 0s

    number.splice(0,number.length,...non0Elements.concat(Array(numOfZeroes).fill(0)));
}

let number= [0];
moveZeroes(number);
console.log(number);
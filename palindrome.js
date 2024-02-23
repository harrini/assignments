// If the given string and reverse string is same --> palindrome

// Objective: If the given string is palindrome

// hints:

// 1) use the above logic to reverse the string
// 2) if the reverse string === original string --> true else the false

// function isPalindrome(word){
    

//     const reverseWord = word.split(' ').reverse().join('');

//         return reverseWord === word;
        
// }
// console.log(isPalindrome('radar'));
// console.log(isPalindrome('hai'));



function isPalindrome(word){

    let result = word.split("").reverse().join("");
    console.log(result);

    if(result===word){

        return "Word is a Palindrome";
    }
    else {

        return "Word is not a Palindrome";
    }
    
}
console.log(isPalindrome('radar'));
console.log(isPalindrome('hello'));








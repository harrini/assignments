// Example 3: 

// Write a function to check if two strings are anagrams.

//  Input: isAnagram('listen', 'silent')
//  Output: true
//  Input: isAnagram('hello', 'world') 
//  Output: false
//  Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
// */

function anagram(strl1,strl2){

    if(strl1.length!==strl2.length){

        console.log("This is not an Anagram");
        return false;
    }

    let splitStrl1 = strl1.split("").sort().join("");
    let splitStrl2 = strl2.split("").sort().join("");  

    
    return (splitStrl1===splitStrl2)

}

console.log(anagram('listen', 'silent'));
console.log(anagram('hello', 'world'));


// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //I: base 
    //O:function testing if given value is greater than base
    
    return function(value){
        //conditional to test is value is greater than base return true
       if(value > base){
           return true;
           // return false if no
       }else{
           return false;
       }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //Input: base argumet 
    //Output: function that tests is base is less than given value
    return function(value){
        //retun function testing base agaisnt value
        if(value < base){
            return true;
        }else {
            return false;
        }
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //Input: startsWIth character
    //Output: function that will check if given string begins with startsWith character
    //Constraints: must return a functions. startsWith is a single character
    //edge cases: uppercase/lowercase
    return function(string){
        //compare first character of string to startsWith. force lowercase. if strictly equeal return return true
       if(string.charAt(0).toLowerCase() === startsWith.toLowerCase()){
           return true;
           //else return false
       }else{
           return false;
       }
        
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
      //Input: endsWIth character
    //Output: function that will check if given string begins with endsWith character
    //Constraints: must return a functions. endssWith is a single character
    //edge cases: uppercase/lowercase
    return function(string){
        //compare last character of string to endsWith. force lowercase. if they are strictly equal return true
       if(string[string.length-1].toLowerCase() === endsWith.toLowerCase()){
           //if not return false
           return true;
       }else{
           return false;
       }
        
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //I:array of strings, function modifying strings
    //O:array of modified strings 
    //C:
    //E:
    //Create empty array to hold modified strings
 let modStrings = [];
 //loop through given array passing strings through modify function
 for(let i = 0; i < strings.length; i++){
     //push modified strings into empty array
    modStrings.push(modify(strings[i]))}
    //return array
    return modStrings;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //I:an array of strings, a function testing the strings in the array
    //O: boolean. true if ALL string pass test function, false otherwise 
    //C:all strings must pass
    //E:
    // create empty array to hold test output
    let tested = [];
for(let i = 0; i < strings.length; i++){
    //push test output into empy array with for loop
   tested.push(test(strings[i]));
   //console.log(tested);
}// for loop over tested array
for(let i = 0; i < tested.length; i++){
    // if element in array equals boolean value false return false
        if(tested[i] === false){
        return false;
    }
    
//else return true
}return true;
    
    
  
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
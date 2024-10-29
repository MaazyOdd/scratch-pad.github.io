// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //grasp, plan, code, debug
      //I: input is a string
      //O: output is also a string
      //C: needs to use a loop to iterate through string
      //E:

    //create something to collect the output to be returned
    var output = ''
    //make a loop to iterate over the values in the string
    //loop needs to access each value, then reverse the order of values presented
    for (var i = string.length -1; i >= string.length; i--){
      console.log(string[i])
    };
    //make sure to return output
    return output
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}
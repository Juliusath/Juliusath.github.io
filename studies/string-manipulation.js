//STRING MANIPULATION  is how a user can access a string's characters or modify a strng.
var string = "Operation";
var manipulation = "Spark";
console.log(string + manipulation); // OperationSpark prints to console, the "+" concatenates the two values 
let stringSecond = "studeis"
stringSecond += "project"; // "studeis project". This is assignment by concatenation


//2. JS has myriad METHODS to modigy strings. EXAMPLES
let modifyMe = "Julius Thompson";
modifyMe.charAt(6); // returns " ", because it is the 6th indexed character in the string 

modifyMe.indexOf("J"); // returns 0, the index of the specified character

modifyMe.slice(0,8); // returns "Julius T", slicing the first 8 characters from the string

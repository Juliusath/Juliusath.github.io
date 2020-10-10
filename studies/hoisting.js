//HOISTING - describes how declarations are moved to the top of their scope by Javascript interpreter

//1. var is hoisted to the top of its scope and initialized as undefined
console.log(hoist);
var hoist = "hoist var"; // prints "undefined" because although hoisted to top of scope, value is not initialized

/**2. let & const like var are hoisted to the top of their scope but they are not initialized. 
 * console.log(y);
 * let y = "hoist let";
 * console.log(z); 
 * const z = "hoist const"; 

Both instance result in an error because neither variable is initialized. */
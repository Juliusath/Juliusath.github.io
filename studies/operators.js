// OPERATORS 
//1. Arithmetic Operators - resolve to number values. 
var addtion = 5 + 5;
console.log(addtion); // 10
var subtraction = 5 - 5;
console.log(subtraction); // 0
var multiplication = 10 * 10; 
console.log(multiplication); // 100
var division= 100/10;
console.log(division); // 10
var modulus = 5%2;
console.log(modulus); // 1 because 5/2 = 2 remainder 1. 
var incrementer = 50;
incrementer++;
console.log(incrementer); // 52, increment operater adds one 
var decrementer = 20;
decrementer--;
console.log(decrementer); // 18 decrement operator subtracts onw

//2. Comparison operaators - resolve to boolen values by comparing two operators
1 === 1; //  true. Strictly true, tests for same value and data type
1 == "1";// false. Equal to, tests for same value
60 >= 6; // true. Greater than/ Greater than or equal to
50 <= 5; // true. Less than / Less than or equal to
10 != 10; // false. Bang operator/negation. not equal to
10 !== "10"; // true. Not strictly equal to. Compares value and type

//3.Logical Operators - tests truth of statements, returns boolean
"condtion one" === "condition one" && "condtion two" === "condtion two" ;// true. "And" operator test for truth of BOTH operands
"condtion one" === "condtion one" || "condtion one" != "condition two"; // true. Or operator test for truth of one operand.
!("condtion one" === "condition one"); // false. bang operator, invalidates following statement

//4.Assignment Operator -assigns values to variables
var why = 1; // assigns value of number 1 to variable "why"
why += 50;
console.log(500); //501.  += assigns existing value plus right operand
why -= 500;
console.log(why);//1.  +- assings existing value minus right operand
why *= 10;
console.log(why);//10. *= assingns existing value multiplied by right operand
why /= 10;
console.log(why);//1. /= assings existing value divided by right operand

//5. Unary Operator operaters that only require one operand
var single = "one"
-single;
console.log(single); // NaN. - operator attempts to turn operand into number
!single; //false.Bang operator. negates value
typeof single; // string. prints string of variable's data type to console. 

/*6. Ternary Operator. Three operands; condition ? code to execute if resolved to truthy
and code to execute if resolved two falsy*/
var a = 90;
var b = 91;

var ternaryOperator = a < b ? console.log("truthiness") : console.log("falsiness");
console.log(ternaryOperator); // truthiness prints to console.
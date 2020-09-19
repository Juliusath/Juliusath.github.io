/*
 * VARIABLES:
 *
 * 0. Variables hold values in memory of a program.  Variables
 * are named containers which can point to values of a particular type, such as a Number, String,
 * Boolean, Array, Object or another data-type.  These are called variables because once created, we
 * can CHANGE the value (and type of value) that they contain.
 *
 * 1. To create a variable use the keyword, var/let/const, followed by a name for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is UNDEFINED because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// var let const

// 1. var declarations are globally and locally scoped. They can be redeclared and updated
var name = "Julius" ;      //Here var "name" is globally scoped and acessible throughout the window

function printName(value){               //Here var "lastName" is locally/function scoped, only avaiale
    var lastName;                        //inside of the function. Notice the, globally scoped  "name" var
    console.log(name + " " + lastName);} //is accessable from outside of the function 
                                           
                                            
                                            
/*2. let declarations are the standard declarations for Javascript. let declarations are block scoped
     and can be updated but not redeclared */
function demoLet(){
    let letScope = "blockScoped"; // let is only availble within the block of code that it is declared
    return "let is" + " " + letScope;
}
/* console.log(x)   would throw a reference error because 
                    "x" isn't avaialbe outside of code block */

//3. const declarations are block scoped, like let, but cannot be redeclared nor updated. 
function demoConst(){
    const constScope = "blockScoped"; // let is only availble within the block of code that it is declared
    return "const is" + " " + constScope + " " + "and constant.";
}
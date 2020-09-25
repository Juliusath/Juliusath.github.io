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
var name;

/*
 * At declaration , the variable name is UNDEFINED because it hasn't been intialized.
 * it to anything
 */
console.log(name); // prints => undefined

// 2. initialization or assignment //
name = 'kenny';
console.log(name); // prints => kenny

// 3. re-assignment //
name = 'dennis'
console.log(name); // prints => dennis

// NOTE: Any data type can be assinged to a variable declared with the var keyword//
var numVariable = 1;
var booleanVariable = true;
var stringVariable = "someString";

// var let const

// 1. var declarations can be locally or gloabally scoped
var name = "Ajai" ;      //var "name" is globally scoped and acessible throughout the window

function printName(value){               //the variable "lastName" is function scoped, only avaiale
    var lastName = "dennis";            //inside of the function. The globally scoped  "name" variable
    console.log(name + " " + lastName);} //is accessable from outside of the function 
                                           
                                            
                                            
/*2. Variables declared with let are the standard declaration method for Javascript. A variable declared with let is block scoped
     and can be updated but not redeclared */
function thisIsLet(){
    let scope = "blockScoped"; // let can only be accessed within the block of code that it is declared. 
    return "let is" + " " + scope;
}
// console.log(scope)  -> would cause an error because the scope variable isn't accessible outside of the function's scope

//3. Like let, variables decalred with const are block scoped. They cannot be updated nor redeclared
function constScope(){
    const thisIsConst = "blockScoped"; // the const variable is only accesible within this function scope.
    return "const variables are" + " " + constScope + " " + "and cannot be redclared nor updated.";
}
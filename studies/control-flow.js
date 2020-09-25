/*CONDITIONAL STATEMENTS/CONTROL FLOW is the methodology allowing the programer to "control the flow" of their program based on 
* weather certain conditions are met within the code. 
* CONDITIAL STATEMENTS's syntax can contain; if statemts, if-else statements, if-else else if statements, and switch statements*/

//1. If statements resolve to a single boolean value
    //Syntax if(this condition is true...){...execute this code}
var condition = 10;
if(condition > 1){           //if true the code will execute
    console.log("Control"); //returns "Control"
}

if(condition < 100){
    console.log("Flow"); // prints nothing because the condition is false
}

/*2.If-Else statements contain a second condition to run if the first condition is false */
    //A. Syntax if(this condition is true..){...execute this code}else{...execute this code instead}
if(condition < 5){           //if this condition is true, code will execute
    console.log("not true"); 
}else{
    console.log("default"); // returns "default"
}

//3.If-Else Else-if; When there are several conditions and severl possible outcomes we can use these statements. 
 
    /*A. if(first condition met}(this code should be executed)else if{this condition is met}(execute this code instead)*/
if(condition === 50){
    console.log("false");
}else if( condition < 50){
    console.log("false");
    }else{
        console.log("true"); // "true" prints to console.
    }
    
 //4. Switch statements can be used when there are several conditions to test.
      /*A. Syntax switch (value) { case condtion : code to execute; break; case condition : code to execute; break; ......break;
      default : code to execute} */
      let name = "Kenny Dennis"
      
    switch (name){
        case 'Ajai' : console.log("false");
        break;
        case "Serengeti" : console.log("false"); 
        break;
        case "Grimm Teachaz": console.log("false");
        break;
        default : console.log("To the Max");
    }
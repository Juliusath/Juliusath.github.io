     //FUNCTION reusable blocks of code. Function are first DECLARED then INVOKED
     
  //A. Delcaration
    function heiroglyphics(parameterFirst, parameterSecond, parameterThird){ // function is declared with to parameters
        console.log(parameterFirst + parameterSecond + parameterThird)  }  // this code will be executed at invocation
     //Syntax
        //the 'function' keyword followed by te name of your function(hieroglyphics above)
        //in the parentheses following the functoin name go the function parameters. the parameters are placeholders for 
        //the function's arguments that will replace the parameters when the function is invoked. Parameters typically have names
        //that indicate what type of argument will be passed into the function (ex; string, number, array)
        //following the parameters in curly brackets goes the code to be executed when the function is alled (console.log in the example above)
     
      //B.Calling or Invoking function
      heiroglyphics("argueFirst","argueSecond", "argueThird"); // function invoked with arguments passed into place of parameters
      
      
     
      //C. Function expression is a function being stored in a variable.
      var heiro = function heiroglyphics(parameterFirst, parameterSecond, parameterThird){ 
        console.log(parameterFirst + parameterSecond + parameterThird)  }; // Function assigned to heiro
      heiro("Tajai", "aPlus", "phesto"); // invocation of function expression
      
     
     
      //D Inputs/Outputs - 
      function armandHammer(parameterOne){ // parameterOne is aramndHammer function's input
          return parameterOne + 'elucid';   // function's output determined by return statement
      }
      /*E Scope/Clousre - accessiblity of variables within a funcction is determined by scopes and closure.
                          the scope of a function is dictated by the functions closures. Operations/functions inside a function can access outer 
                           function's variables*/
        function scopes(array){
            let age = 50;        
            if(age > 21){
                array.push(age)   // push() method can access age variable. 
            }
        }
        
        /**Function Expressions- 
         * similar to a funciton declaration a function expression is when a function is assigned to variable. 
         * The variable can then be used as any other variable in javaScript
         * the function in a function expression doesn't need to have a name after the function keyward, these are known 
         * as anonymous functions */
         let shrines = function(){
             console.log("Bitter Cassava");
         };
    
        
     //FUNCTION reusable blocks of code. Function are first DECLARED then INVOKED
  //A. Delcaration
    function heiroglyphics(parameterFirst, parameterSecond, parameterThird){ // function is declared with to parameters
        console.log(parameterFirst + parameterSecond + parameterThird)  }  // this code will be executed at invocation
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
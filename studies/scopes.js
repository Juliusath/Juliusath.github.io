//SCOPE - refers to the accessibility of variables or constants
  /*1. GLOBAL SCOPE  vs LOCAL/Function Scope- variables that are globablly scoped are accessible inside and 
  outside of functions. A local or functionall scoped variable is only available within the scope of the function
  in which it is declared */
  var global = "scope" ;    // variable "global" is globally scoped
  function checkScope(){ 
      var local = "scoped"; // variable "local" is locally scoped
      console.log (global + local);
  }
 // local.length            "local" variable is inaccessible because it was declared in checkScope()
  checkScope();            // prints "scopescoped" to console,the function can reach outside
                           // to access "global". 
  
  var local = "local"      // Here local has been defined globally
  checkScope();            // Running the same function with a locally scoped "local" variable, 
                           // the function accesses the locally scoped "local" variable 
//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I:an object
 * O:an array of object values
 * C:n/a
 * E:n/a
 */
function objectValues(object) {
    //Object.values method returns an array of object values
   return Object.values(object);
}


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I:an object
 * O:an string of object keys seperated by a space
 * C:return should be a string seperated by space
 * E:n/a
 */
function keysToString(object) {
    //object.keys method returns an array of object keys. chain with .join to convert into a string seperated by a space. 
    return Object.keys(object).join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I:an object
 * O:a string of object string values seperated by a space
 * C: should only return string values
 * E:
 */
function valuesToString(object) {
    // empty array to hold return
let arr = [];
    // loop through object
for(var key in object){
    //if object value is a string
  if(typeof object[key] == 'string'){
    //push string into array
    arr.push(object[key]);
  }
  // return the array converted to string with .join method
}return arr.join(" ");
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I:a collection object or array
 * O:a string of 'collection's ' data type'
 * C: should distinguish between object and array
 * E:
 */
function arrayOrObject(collection) {
    // Array.isArray checks if collection is an array
    if(Array.isArray(collection)){
        // return result of isArray method
        return 'array';
        // if not array then return 'object'
    }return 'object';
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I:a string
 * O:string with the first letter of capitalized
 * C:n/a
 * E:n/a
 */
function capitalizeWord(string) {
    // chain char, toUpperCase methods and concatenate with .slice method
  return string.charAt(0).toUpperCase() + string.slice(1);

    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I:string
 * O:a string wiht the first letter of each word capitalized
 * C: 
 * E:input string could be all caps or all lowercase
 */
function capitalizeAllWords(string) {
    // variable to hold string split up into an array at each space and converted to lowercase
       var splitStr = string.toLowerCase().split(' ');
     // loop through varialbe array 
   for (var i = 0; i < splitStr.length; i++) {
     // concatente first character.toUpperCase of array element i and remainder that same string
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // join array into a string seperated by space
   return splitStr.join(' '); 

    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: an object
 * O: a welcome message
 * C:
 * E:capitalization
 */
function welcomeMessage(object) {
    // string literal calling object.name value capitalized 
    return `Welcome ${object['name'].charAt(0).toUpperCase() + object['name'].slice(1)}!`;


}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: an object
 * O: string 
 * C:
 * E: capitalization
 */
function profileInfo(object) {
    // string literal capitalizing values and concatenating into profile info message
    return `${object['name'].charAt(0).toUpperCase() + object['name'].slice(1)} is a ${object['species'].charAt(0).toUpperCase() + object['species'].slice(1)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I:an objecgt
 * O:a string of noises values on object
 * C:
 * E:no noises property
 */
function maybeNoises(object) {
    //if object noises exists and has an array length greater than zero
if (object.noises && object.noises.length > 0) {
    // then return noises array converted to string and seperated by a space.
        return object.noises.join(' ');
        // if no noises array then return message
    } return 'there are no noises';

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I:a string and a word also a string
 * O:boolean value
 * C:n/a
 * E:n/a
 */
function hasWord(string, word) {
    //.includes method returns boolean value
    return string.includes(word);

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I:a name (string) and an object
 * O:updated object with name value added to friends property
 * C:
 * E:
 */
function addFriend (name, object) {
    //.push name value into object's friends array
   object.friends.push(name);
   //return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I:a name string and an object
 * O:boolean value 
 * C:
 * E:
 */
function isFriend(name, object) {
    // if object.friends exists and includes name value
    if((object.friends) && object.friends.includes(name)){
    
        return true;
    }
    //if object.friends does not contain name value
return false;
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: name of an object and an array
 * O:an array of names not on the friends list of input name object
 * C:
 * E:
 */
function nonFriends(name, array) {
    //empty array to hold list of nonfriends
let notpals = [];
//loop through input array 
for(let i = 0; i < array.length; i++){
// if element at array index i is not input name vlaue and the friends array doesn't include input name value
    if(array[i]['name'] !== name && !array[i]['friends'].includes(name)){
        // then push value at array index into non friends list
        notpals.push(array[i]['name'])
    }
}
//return non friends list
return notpals;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: and object, an object property key and an object value
 * O: an object updated with input key and value
 * C:
 * E: object does not have input key property
 */
function updateObject(object, key, value) {
    //assign value to object.key
object[key]= value;
//return updated object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I:an object and an array of strings
 * O:object with properties listed in array removed
 * C:
 * E:
 */
function removeProperties(object, array) {
    //loop through array 
    for (let i = 0; i < array.length; i++) {
        // delete properties from array list
        delete object[array[i]];
        //return object
    } return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: an array
 * O: array with duplicates removed
 * C:
 * E:
 */
function dedup(array) {
    //empty array to hold values from conditional loop
    let newArray = []
    //loop through array
    for (let i = 0; i < array.length; i++) {
        //if element at index i in array strictly equals the value i 
        if (array.indexOf(array[i]) === i) {
        //push value into new array
            newArray.push(array[i]);
        }
        // return new array
    } return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //I:id, nameFirts, nameLast
    //O: an object with function's parameters as keys and arguments as properties
    //C: output should be an object
    // return statement that passes arguemnts into object
    return { id: id,
    nameFirst: nameFirst,
    nameLast: nameLast
        
    };

} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts =[];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
            
        },
        //I: a contact object
        //O: adds contact object to contact list
        //C: should push object into contacts array
        
        addContact: function(contact){
        //Push contacts into array
            return contacts.push(contact);
                
            },
            //I:FullName string
            //O: contact object belonging to fullName or undefined if unfound
            //C:should return object
            //E: name not foound, capitalization
        findContact: function(fullname){
            // loop through contacts array for fullName
            for(let i = 0; i < contacts.length; i++){
            //if name is found then return contact objects
                if(contacts[i].nameFirst+ " " + contacts[i].nameLast === fullname){
                    return contacts[i];
                }
            }
            // if name isn't found, return undefined
            return undefined;
        
    },
        removeContact:function(contact){
            //I:contact 
            //O: modified contacts list with contact removed
            //C: should modify list
            //E:
            //loop through contacts array lookinf for conact argument
            for(let i= 0; i < contacts.length; i++){
                if(contacts[i] === contact){
            // if contact is found use splice method to remove it
                    return contacts.splice(i, 1);
                }
                
            }
    },
        printAllContactNames: function(){
         // create empty array to hold contact info
         let prints =[];
         //for loop iterating through contacts array and pushing into empty array
         for(let i= 0; i < contacts.length; i++){
             prints.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
         }
         //return joined array. 
         return prints.join("\n");
            
        }
};

}


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}

/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        sayHello()
        {
            return "Hello "+this.firstname+' '+this.lastname
        }
    }
    // your code here
     document.querySelector('#run').onclick = function ()
     {
         let corentin = new Person('Corentin','Nys');
         console.log(corentin.sayHello());
     }
})();
/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
       getter(){
            return this.firstname + this.lastname;
       }
       setter(fullname)
       {
          let fullName = fullname.split(' ');
          this.lastname = fullName[1]
          this.firstname = fullName[0]
       }
    }



    document.querySelector('#run').onclick=function ()
    {
        let Corentin = new Person('Corentin','Nys');
        console.log(Corentin.getter())
        Corentin.setter('Mathieu Zaleski')
        console.log(Corentin.getter());
    }
})();
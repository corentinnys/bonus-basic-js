/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.querySelector('#run').onclick = function () {
        const user = {nom:"Nys", prenom:"Corentin",age:32,ville:'Liege',pays:'Belgique '};
        console.log(user);
    }

})();
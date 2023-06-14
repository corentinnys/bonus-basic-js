/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let target  = document.querySelector('#target');
    let splitTxt =target.innerHTML.split('');

    i = 0;
    setInterval(function(){    AjoutDeLettre()}    , 100 );
    function AjoutDeLettre(){
        if(i < splitTxt.length){
            target.innerHTML += splitTxt[i];
            i++;
        }
    }


    console.log(target)
    // your code here

})();
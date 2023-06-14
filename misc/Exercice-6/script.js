/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let aleatoireNumber = Math.ceil(Math.random()*10);
    let counter = 1;

    let userNumber = prompt('deviner le nombre ? ');
    console.log(aleatoireNumber);
    while (userNumber!=aleatoireNumber)
    {
        if(userNumber >aleatoireNumber) {
           alert('plus petit ')
            userNumber = prompt('deviner le nombre ? ');
        }
        else
        {
            alert('plus grand ')
            userNumber = prompt('deviner le nombre ? ');
        }

    counter+=1
    }
    alert('vous avez trouver en '+counter+' fois');

})();
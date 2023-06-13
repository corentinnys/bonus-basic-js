/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.querySelector('#run').onclick= function () {
        let numberArray = [];
        for(let i = 0;i<10;i++)
        {
            let number = Math.ceil(Math.random()*100)
            document.querySelector('#n-'+(i+1)).innerHTML = number;
            numberArray.push(number);

        }
        let max = Math.max(...numberArray)
        let min = Math.min(...numberArray)
        let somme = 0;
        for (items of numberArray)
        {
            somme+=items
        }
        let average = somme/numberArray.length;

        document.querySelector('#min').innerHTML = min;
        document.querySelector('#max').innerHTML = max;
        document.querySelector('#sum').innerHTML = somme;
        document.querySelector('#average').innerHTML = average;

    }

})();
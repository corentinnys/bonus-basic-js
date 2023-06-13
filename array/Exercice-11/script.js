/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "tomate",
        "cerise",
    ];

    // your code here
    document.querySelector('#run').onclick = function () {
        for (let i = 0;i<fruits.length;i++)
        {
            for (let y = fruits.length;y>0;y--)
            {

                if (fruits[i]==fruits[y])
                {

                   fruits.splice(fruits[i],1);
                }
            }
        }
        console.log(fruits);

    }

})();
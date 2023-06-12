/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.querySelector('#run').onclick = function () {
        var color_1 = Math.ceil(Math.random()*255);
        var color_2 = Math.ceil(Math.random()*255);
        var color_3 = Math.ceil(Math.random()*255);
        document.querySelector('body')
            .style.background='rgb('+color_1+','+color_2+','+color_3 +')';
    }

})();
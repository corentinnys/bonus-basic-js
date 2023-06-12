/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function getAge(date) {
    let diff = Date.now() - date.getTime();
    let age = new Date(diff);

    return Math.abs(age.getUTCFullYear() - 1970);
}



(function() {
    // your code here
    document.querySelector('#run').onclick = function ()
    {

       let year =document.getElementById('dob-year').value;
        let month =document.getElementById('dob-month').value;
        let day =document.getElementById('dob-day').value;

       alert(getAge(new Date(year, month, day)));

    }

})();
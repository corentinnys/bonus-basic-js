/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","june","July","August","September","October","November","December"];
    // your code here
    const d = new Date();
    let day = d.getDay();
    let jour = weekday[day];
    let mois =  month[d.getMonth()];
   let dateEnglish =jour+" "+d.getDate()+" "+mois+" " +d.getFullYear();
   document.querySelector('#target').innerHTML = dateEnglish;

})();
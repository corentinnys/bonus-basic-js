
/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.querySelector('#pass-one').onkeyup = function (event) {
        let value = event.currentTarget.value.length;
        event.currentTarget.disabled =false;
        if(value<=10)
        {
            document.querySelector('#counter').innerText =value+'/10'
        }else{
            event.currentTarget.disabled =true;
        }




    }
    // your code here

})();
/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    if(localStorage.getItem('counter')!=null)
    {
        document.querySelector('#target').innerHTML = localStorage.getItem('counter');
    }else
    {
        document.querySelector('#target').innerHTML = 0;
    }


    document.querySelector('#increment').onclick = function ()
    {

       let target =   document.querySelector('#target') ;

        let number = localStorage.getItem('counter');
        if(localStorage.getItem('counter')!=null)
        {
            number = parseInt(localStorage.getItem('counter'));
        }else{
             number = parseInt(target.innerHTML)
        }

            number +=1;
           target.innerHTML = number;
            localStorage.setItem('counter', number)

    }
})();
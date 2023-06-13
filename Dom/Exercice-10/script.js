/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.querySelector('#run').onclick=function () {
        let pass_one= document.querySelector('#pass-one')
        let pass_two =document.querySelector('#pass-two');
        let pass_one_value =pass_one.value;
        let pass_two_value = pass_two.value;
        if(pass_two_value!=pass_one_value)
        {
            pass_two.className = 'error';
            pass_one.className = 'error';
        }else{
            pass_two.classList.remove('error')
            pass_one.classList.remove('error')
        }
    }
})();
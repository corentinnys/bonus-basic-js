/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


    let target  =document.getElementById('target').innerHTML
    let array = target.split(' ')
    let arrayCopy=[];
    for (let i = 0 ; i<target.length;i++)
    //for (items of array)
    {
            let span =document.createElement('span')
        span.innerHTML = target[i];

            document.querySelector('body').appendChild(span)

            if (i<5)
            {
                span.style.fontSize = '40px';
            }
            else{
                span.style.fontSize = '20px';
            }
            //arrayCopy.push(li.innerText);

    }
    //let strings = arrayCopy.join(' ');
    //document.getElementById('target').innerHTML = strings
})();
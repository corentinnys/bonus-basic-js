/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let table = document.createElement('table');
    document.querySelector('#target').appendChild(table)
    for (let y = 1;y<=10;y++)
    {

        for (let i = 1 ; i<=10;i++)
        {
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            td.innerText=i*y;
            table.appendChild(tr)
            tr.appendChild(td)
        }
    }



})();

let confirmer = true;

do{
    let age =   prompt('age ?');
    let genre = prompt('genre ?');
    let town =prompt('town ?');
    alert( age+ genre+town)
    confirmer = confirm('confirmer')
}while(confirmer!=true)



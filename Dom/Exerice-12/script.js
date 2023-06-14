document.querySelector('#pass-one').onkeyup = function (event) {

    let value = event.currentTarget.value;
    const regex = /[1-9]{2,4}/;
    let search = value.search(regex);
    if (value.length>=8 && search!=-1 )
    {
        document.querySelector('#validity').innerHTML= 'ok'

    }else
    {
        document.querySelector('#validity').innerHTML= 'not ok'
    }

}
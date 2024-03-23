var password = "test";

function passcheck() {

    if(document.getElementById(password).value != password) {
    //alert('wrong');
    return false;
}

if(document.getElementById(password).value == password) {
    //alert('right');
}

}
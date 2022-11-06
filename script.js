function beill() {
    var nev = document.getElementById("nev").value;
    document.getElementById("nevvissza").innerText = nev;
    var cim = document.getElementById("cim").value;
    document.getElementById("cimvissza").innerText = cim;
    var tel = document.getElementById("tel").value;
    document.getElementById("telvissza").innerText = tel;
}

function szin() {
    document.getElementById("nev").style.background = "lightblue";
}
function szin2() {
    document.getElementById("cim").style.background = "lightblue";
}
function szin3() {
    document.getElementById("tel").style.background = "lightblue";
}
function szinvissza() {
    document.getElementById("nev").style.background = "white";
}
function szinvissza2() {
    document.getElementById("cim").style.background = "white";
}
function szinvissza3() {
    document.getElementById("tel").style.background = "white";
}
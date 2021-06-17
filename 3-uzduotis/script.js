"use strict";


function trikampis(){
    let a, b, c;
    a = document.getElementById("reiksme_A").value;
    b = document.getElementById("reiksme_B").value;
    c = document.getElementById("reiksme_C").value;

    if (a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0){
        document.getElementById("Atsakymas").innerHTML = "Trikampis gaunasi";
    } else {
        document.getElementById("Atsakymas").innerHTML = "Trikampis nesigauna"; 
    }   
}
"use strict";


function trikampis() {

var A, B, C;

A = document.getElementById("reiksme_A").value;
B = document.getElementById("reiksme_B").value;
C = document.getElementById("reiksme_C").value;


if(A <= 0){
    A = 0;
} else {
    A = 1;
}

if(B <= 0){
    B = 0;
} else {
    B = 1;
}

if(C <= 0){
    C = 0;
} else {
    C = 1;
}

if(A + B + C == 3){
    document.getElementById("Atsakymas").innerHTML = "Trikampis gaunasi";
} else {
    document.getElementById("Atsakymas").innerHTML = "Trikampis nesigauna";
}
}  

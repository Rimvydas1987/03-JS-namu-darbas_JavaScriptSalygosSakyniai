"use strict";


function MaxNumber() {

var A, B, C;

A = document.getElementById("reiksme_A").value;
B = document.getElementById("reiksme_B").value;
C = document.getElementById("reiksme_C").value;
document.getElementById("Atsakymas").value = Math.max(A, B, C);

  }
var dados0 = document.querySelector("#entrada01");
var dados1 = document.querySelector("#entrada02");
var dados2 = document.querySelector("#entrada03");
var p = document.querySelector("#p");

var dad0;
var dad1;
var dad2;

var dadosN;
var soma;
var i;

function calc() {
    dad0 = Number(dados0.value);
    dad1 = Number(dados1.value);
    dad2 = Number(dados2.value);
    if (dad0 == 0 || dad1 == 0 || dad2 == 0) {
        i = 0;
    }else{
        dadosN = dad0 + dad1 + dad2;
        soma = dadosN / 3;
        if (isNaN(soma)) {
            p.innerText="Por favor, selecione um número em cada entrada.";
        }
        else{
            i = 1;
        }
    }
}

function acu() {
    calc();
    if (i == 1) {
        p.innerText="Sua média é de: " + soma.toFixed(1);
        i = 0;
    } else{
        p.innerText="Por favor, selecione um número em cada entrada.";
    }
    console.log(dad0)
    console.log(dad1)
    console.log(dad2)
    p.style.backgroundColor = "#d9d9d9";
    p.style.fontWeight = "600";
    p.style.fontSize = "13pt";
    p.style.padding = "0.5em";
    p.style.borderRadius = "0.3rem";
    p.style.width = "23%";
    p.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif";
}
//var boz1 = document.querySelector('#box1').value;
///var boz2 = document.querySelector('#box2').value;
//var boz3 = document.querySelector('#box3').value;
//var all;
// var boz = document.getElementById('box1')

//somar todos e depois divir 

// all.reduce(act)

// function act(){
//     var all = [boz1 + boz2 + boz3]
//     console.log(all)
// }
// console.log(act())

var boz = document.querySelector("#box")
var boz01 = document.querySelector("#box01")
var boz02 = document.querySelector("#box02")

var bor;
var bor01;
var bor02;

var soma;
var div;

function calcu() {
    bor = Number(boz.value)
    bor01 = Number(boz01.value)
    bor02 = Number(boz02.value)
    soma = bor + bor01 + bor02
    div = soma / 3
}
var res = document.querySelector(".res");
function action(){
  calcu();
  res.innerText='Resultado: ' + div;
  console.log(bor);
  console.log(bor01);
  console.log(bor02);
} 
  
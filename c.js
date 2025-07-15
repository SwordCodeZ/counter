const clabel = document.getElementById("clabel");
const ib = document.getElementById("ib");
const rb = document.getElementById("rb");
const bd = document.getElementById("db");


let count = 0;

ib.onclick = function(){
    count++;
    clabel.textContent = count;}
db.onclick = function(){
    count--;
    clabel.textContent = count;}
rb.onclick = function(){
    count = 0;
    clabel.textContent = count;}

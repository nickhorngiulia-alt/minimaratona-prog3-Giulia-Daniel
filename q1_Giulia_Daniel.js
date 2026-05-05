
let numeros = [];
function q1(){
    let n = parseInt(document.querySelector("#campo").value);
for (let i = 1; i <= n; i++){
    if (i % 3 == 0 && i % 5 == 0){
        numeros.push("FizzBuzz");
    } else if (i % 3 == 0){
        numeros.push("Fizz");
     } else if (i % 5 == 0) {
        numeros.push("Buzz");
    } else if (i % 7 == 0){
        numeros.push("boom");
    } else {
        numeros.push(i);
    };
}
document.querySelector("#saida").textContent = numeros;
numeros = [];
}

document.querySelector("#btnExecutar").addEventListener("click",q1);

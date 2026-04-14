
let numeros = [];
function q1(){
    let n = parseInt(document.querySelector("#campo").value);
for (let i = 1; i <= n; i++){
    if (i % 3 == 0 && i % 5 == 0){
        m5e3 = "FizzBuzz"
        numeros.push(m5e3);
    } else if (i % 3 == 0){
        let m3 = "Fizz"
        numeros.push(m3);
     } else if (i % 5 == 0) {
        let m5 = "Buzz"
        numeros.push(m5);
    } else if (i % 7 == 0){
        m7 = "boom";
        numeros.push(m7);
    } else {
        numeros.push(i);
    };
}
document.querySelector("#saida").textContent = numeros;
numeros = [];
}

document.querySelector("#btnExecutar").addEventListener("click",q1);

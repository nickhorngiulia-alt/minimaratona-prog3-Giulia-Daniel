
function inverter(){
    let texto = document.querySelector("#campo").value;
    let vetor = texto.split(","); //a,b,c
    let vetorNovo = [];
    for (let i = vetor.length - 1; i >= 0; i--){
        vetorNovo.push(vetor[i]);
    }
document.querySelector("#saida").innerHTML = vetorNovo;
}
document.querySelector("#btnExecutar").addEventListener("click", inverter);
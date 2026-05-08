function contador(){
    let frase = document.querySelector("#campo").value;
    let vetorFrase = frase.split(" ");
    let totalPalavras = vetorFrase.length;
    let maisCurta = vetorFrase[0];
    let maisLonga = "";
    for(let i = 0; i  < vetorFrase.length; i++){
        let palavra = vetorFrase[i];
        let letras = palavra.split("").length;
        if (maisCurta.split("").length > letras){
            maisCurta = palavra;
        }
        if (maisLonga.split("").length < letras){
            maisLonga = palavra;
        }
    }
    
    document.querySelector("#saida").innerHTML = `Total de Palavras: ${totalPalavras} <br>
    Palavra mais longa: ${maisLonga} <br> Palavra mais curta:  ${maisCurta}`
}

document.querySelector("#btnExecutar").addEventListener("click", contador);
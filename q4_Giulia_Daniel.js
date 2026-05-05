function contador(){
    let frase = document.querySelector("#campo").value;
    let vetorFrase = frase.split(" ");
    let totalPalavras = vetorFrase.length;
    let VetorPalavra = [];
    let maisCurta = "";
    let maisLonga = "";
    for(let i = 0; i  < vetorFrase.length; i++){
        let palavra = vetorFrase[i].split("");
        //let letras = palavra.length;
        
        
    }
    
    document.querySelector("#saida").innerHTML = `Total de Palavras: ${totalPalavras} <br>
    Palavra mais longa: ${maisLonga} <br> Palavra mais curta:  ${maisCurta}`
}

document.querySelector("#btnExecutar").addEventListener("click", contador);
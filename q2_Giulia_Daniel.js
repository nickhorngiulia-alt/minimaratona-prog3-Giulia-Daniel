function solucao() {
    let texto = document.querySelector("#campo").value;
    let invertido = texto.split("").reverse().join("");
    let boolean;

    if (invertido.toUpperCase() === texto.toUpperCase()) {
        boolean = "true";
    } else {
        boolean = "false";
    }
    document.querySelector("#saida").textContent = `${boolean}`;
}
document.querySelector("#btnExecutar").addEventListener("click", solucao);
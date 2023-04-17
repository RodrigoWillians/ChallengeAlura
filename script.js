const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

const inputLateral = document.querySelector(".input-lateral");
const copy = document.querySelector(".copy");

function criptografar(event) {
    event.preventDefault();

    const textCripto = document.querySelector(".input-principal");
    const texto = textCripto.value;

    const description = document.querySelector(".aside-description");
    const imgLateral = document.querySelector(".img-lateral");

    imgLateral.style.display = "none";
    description.style.display = "none";

    let novaString = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            novaString += "ai";
        } else if (texto[i] === "e") {
            novaString += "enter";
        } else if (texto[i] === "i") {
            novaString += "imes";
        } else if (texto[i] === "o") {
            novaString += "ober";
        } else if (texto[i] === "u") {
            novaString += "ufat";
        }    
        else {
            novaString += texto[i];
        }
    }

    copy.style.display = "block";
    inputLateral.style.display = "block";

    inputLateral.value = novaString;    
}

function descriptografar(event) {
    event.preventDefault();

    const textCripto = document.querySelector(".input-principal");
    const texto = textCripto.value;

    const description = document.querySelector(".aside-description");
    const imgLateral = document.querySelector(".img-lateral");

    imgLateral.style.display = "none";
    description.style.display = "none";

    let novoTexto = texto.replace(/enter/g, "e")
    .replace(/ai/g, "a")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    copy.style.display = "block";
    inputLateral.style.display = "block";

    inputLateral.value = novoTexto;    
}

function copiarTexto() {
    navigator.clipboard.writeText(inputLateral.value);
    console.log(inputLateral);
}


btn1.addEventListener('click', criptografar); 

btn2.addEventListener('click', descriptografar); 

copy.addEventListener('click', copiarTexto);



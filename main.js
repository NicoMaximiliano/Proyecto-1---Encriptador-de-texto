function getTexto(){
    let texto = document.getElementById("texto").value;
    return texto.toLowerCase();
}

function encriptarTexto(){
    let texto = getTexto();
    let textoE = "";

    for(let i=0;i<texto.length;i++){
        let caracter = texto.charAt(i);

        if(caracter === "a"){
            textoE += "ai"
        }
        else if(caracter === "e"){
            textoE += "enter"
        }
        else if(caracter === "i"){
            textoE += "imes"

        }
        else if(caracter === "o"){
            textoE += "ober"
        }
        else if(caracter === "u"){
            textoE += "ufat"
        }
        else{
            textoE += caracter;
        }
    }

    mostrarTextoEncriptado(textoE);
}


function desencriptarTexto(){
    let texto = getTexto();

    let textoD = "";

    for(let i=0;i<texto.length;i++){
        textoD += texto.charAt(i);

        if(textoD.includes("ai")){
            textoD = textoD.replace("ai","a");
        }
        else if(textoD.includes("enter")){
            textoD = textoD.replace("enter","e");
        }
        else if(textoD.includes("imes")){
            textoD = textoD.replace("imes","i");
        }
        else if(textoD.includes("ober")){
            textoD = textoD.replace("ober","o");
        }
        else if(textoD.includes("ufat")){
            textoD = textoD.replace("ufat","u");
        }
    }

    mostrarTextoEncriptado(textoD)
}


function mostrarTextoEncriptado(texto){
    document.getElementById("textoCodificado").innerHTML = texto;
}


function copiarTexto(){
    let textoC = document.getElementById("textoCodificado").value;
    navigator.clipboard.writeText(textoC);
}
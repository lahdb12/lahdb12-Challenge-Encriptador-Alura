//Funcion para encriptar

function botonunoo() {

    encriptar();
    ocultarInteriormuneco();

}

function botondos() {

    desencriptar();
    ocultarInteriormuneco();

}

function encriptar() {

    var textoEncriptado ="";

    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    //"i" cambia aminusculas, "g" toma en cuenta todo hasta espacios, "m" toma en cuenta saltos de linea
    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    
}

function ocultarInteriormuneco() {
    var elementos = document.querySelectorAll('.interiormuneco');
    elementos.forEach(function(elemento) {
        elemento.style.opacity = '0';
    });
}

//Funcion inversa para desencriptar
function desencriptar() {

    var textoEncriptado ="";

    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    //"i" cambia aminusculas, "g" toma en cuenta todo hasta espacios, "m" toma en cuenta saltos de linea
    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
}
//Funcion para copiar

function copiarTexto() {

    var codigoACopiar = document.getElementById('textoDesencriptado');

    codigoACopiar.select();
    document.execCommand('copy');
    window.getSelection()?.removeAllRanges();
}

// imagen de fondo de texto desencriptado





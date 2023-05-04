
const matrizCodigos = [
    ['a', 'ai'],
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat'],
];

const input = document.getElementById('texto');


function encriptar(text) {
    return text.replace(/[aeiou]/g, (match) => matrizCodigos.find(key => key[0] === match)[1]);
}

function desencriptar(text) {
    return text.replace(/(ai|enter|imes|ober|ufat)/g, (match) => matrizCodigos.find(key => key[1] === match)[0]);
}
// TODO: agregar funcionalidad para limpiar el input y mostrar el resultado en un div

function btnEncriptar() {
    const text = input.value;
    const encripted = encriptar(text);
    input.value = encripted;
}

function btnDesencriptar() {
    const text = input.value;
    const desencripted = desencriptar(text);
    input.value = desencripted;
}

// TODO: agregar funcionalidad al boton de copiar al portapapeles
console.log(encriptar('hola'));
console.log(desencriptar('hola'));

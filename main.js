const matrizCodigos = [
  ['a', 'ai'],
  ['e', 'enter'],
  ['i', 'imes'],
  ['o', 'ober'],
  ['u', 'ufat'],
];

const input = document.getElementById('texto');
const result = document.getElementById('resultado');
const containerObjects = document.getElementById('container-objects');
const containerResult = document.getElementById('container-objects-results');
const message = document.getElementById('message');

function encriptar(text) {
  return text.replace(
    /[aeiou]/g,
    (match) => matrizCodigos.find((key) => key[0] === match)[1],
  );
}

function desencriptar(text) {
  return text.replace(
    /(ai|enter|imes|ober|ufat)/g,
    (match) => matrizCodigos.find((key) => key[1] === match)[0],
  );
}

function btnLimpiar() {
  input.value = '';
  result.value = '';
  containerObjects.style.display = 'flex';
  containerResult.style.display = 'none';
}

function btnEncriptar() {
  const text = input.value;
  const encripted = encriptar(text);
  containerObjects.style.display = 'none';
  containerResult.style.display = 'flex';
  result.value = encripted;
}

function btnDesencriptar() {
  const text = input.value;
  const desencripted = desencriptar(text);
  containerObjects.style.display = 'none';
  containerResult.style.display = 'flex';
  result.value = desencripted;
}


function btnCopiar() {
  const text = result.value;
  navigator.clipboard.writeText(text);
  message.textContent = 'Copiado al portapapeles';
  message.style.display = 'block';
}

// TODO: Agregar detalles...
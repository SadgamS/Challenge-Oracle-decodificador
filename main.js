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
const btnLimp = document.getElementById('btn-limp');

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
  btnLimp.style.display = 'none';
}

function btnEncriptar() {
  const text = input.value.toLowerCase().trim();
  const encripted = encriptar(text);
  if (text !== '') {
    containerObjects.style.display = 'none';
    containerResult.style.display = 'flex';
    btnLimp.style.display = 'block';
    result.value = encripted;
  }
}

function btnDesencriptar() {
  const text = input.value;
  const desencripted = desencriptar(text);
  if (text !== '') {
    containerObjects.style.display = 'none';
    containerResult.style.display = 'flex';
    result.value = desencripted;
    message.textContent = 'Mensaje desencriptado!!';
    message.style.display = 'block';
    btnLimp.style.display = 'block';
    setTimeout(() => {
      message.style.display = 'none';
    }, 2000);
  }
}

function btnCopiar() {
  const text = result.value;
  navigator.clipboard.writeText(text);
  message.textContent = 'Copiado al portapapeles!!';
  message.style.display = 'block';
  setTimeout(() => {
    message.style.display = 'none';
  }, 2000);
}

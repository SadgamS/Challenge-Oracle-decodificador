const llaves = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat',
};

const results = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u',
}

const input = document.getElementById('texto');

console.log(input);

const button = document.getElementById('encriptar');



function encriptar(text) {
    return text.replace(/[aeiou]/g, (match) => llaves[match]);
}

function desencriptar(text) {
    return text.replace(/(ai|enter|imes|ober|ufat)/g, (match) => results[match]);
}


console.log(encriptar('hola'));

button.addEventListener('click', () => {
    const text = input.value;
    console.log(text);
    const encripted = encriptar(text);
    console.log(encripted);
    input.value = encripted;
});
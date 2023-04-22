const llaves = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat',
};

const input = document.getElementById('texto');

console.log(input);

const button = document.getElementById('encriptar');



function encriptar(text) {
    let encripted = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] in llaves) {
           encripted = encripted + llaves[text[i]];
        }
        else {
            encripted = encripted + text[i];
        }
    }
    return encripted;
}

console.log(encriptar('hola'));

button.addEventListener('click', () => {
    const text = input.value;
    console.log(text);
    const encripted = encriptar(text);
    console.log(encripted);
    input.value = encripted;
});
const form = document.getElementById('formulario');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const button = document.querySelector('button');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const pesoValue = peso.value;
    const alturaValue = altura.value;
    const resultado = pesoValue / (alturaValue * alturaValue);
    const imc = resultado.toFixed(1);

    document.getElementById('imc').innerHTML = imc;
});
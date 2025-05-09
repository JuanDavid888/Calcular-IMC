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
    if (imc < 18.5) {
        document.getElementById('salud').innerHTML = 'Bajo peso';
        document.getElementById('salud').style.color = 'red';
        document.getElementById('salud').style.fontWeight = 'bold';
    }
    else if (imc >= 18.5 && imc < 25) {
        document.getElementById('salud').innerHTML = 'Peso normal.';
        document.getElementById('salud').style.color = 'green';
        document.getElementById('salud').style.fontWeight = 'bold';
    }
    else if (imc >= 25 && imc < 30) {
        document.getElementById('salud').innerHTML = 'Sobrepeso.';
        document.getElementById('salud').style.color = 'orange';
        document.getElementById('salud').style.fontWeight = 'bold';
    }
    else if (imc >= 30) {
        document.getElementById('salud').innerHTML = 'Obesidad.';
        document.getElementById('salud').style.color = 'red';
        document.getElementById('salud').style.fontWeight = 'bold';
    }
    
    document.getElementById('imc').innerHTML = imc;
});
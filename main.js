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
        
        document.getElementById('enlace').innerHTML = '<a href="https://www.mayoclinic.org/es/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/underweight/faq-20058429" target="_blank">¿Bajo peso?</a>';
    }
    else if (imc >= 18.5 && imc < 25) {
        document.getElementById('salud').innerHTML = 'Peso normal.';
        document.getElementById('salud').style.color = 'green';
        document.getElementById('salud').style.fontWeight = 'bold';

        document.getElementById('enlace').innerHTML = '<a href="https://www.minsalud.gov.co/salud/paginas/mantenga-un-peso-saludable.aspx" target="_blank">Sigue así</a>';
    }
    else if (imc >= 25 && imc < 30) {
        document.getElementById('salud').innerHTML = 'Sobrepeso.';
        document.getElementById('salud').style.color = 'orange';
        document.getElementById('salud').style.fontWeight = 'bold';

        document.getElementById('enlace').innerHTML = '<a href="https://fundaciondelcorazon.com/nutricion/dieta/1350-dieta-sobrepeso.html" target="_blank">¿Sobrepeso?</a>';
    }
    else if (imc >= 30) {
        document.getElementById('salud').innerHTML = 'Obesidad.';
        document.getElementById('salud').style.color = 'red';
        document.getElementById('salud').style.fontWeight = 'bold';

        document.getElementById('enlace').innerHTML = '<a href="https://www.teknon.es/es/especialidades/gonzalbez-morgaez-jose/dietetica-obesidad/recomendaciones-pacientes-obesidad" target="_blank">¿Obesidad?</a>';
    }
    
    document.getElementById('box-imc').style.display = 'block';
    document.getElementById('box-health').style.display = 'block';
    document.getElementById('box-tips').style.display = 'block';

    document.getElementById('imc').innerHTML = imc;
});
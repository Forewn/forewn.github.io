//este script realizara las validaciones de datos para pasar al backend,
// de momento solo alerta que no hay conexion con la db

const button = document.querySelector('button');

button.addEventListener('click', () =>{
    alert('Base de datos desconectada');
});
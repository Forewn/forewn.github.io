const menu = document.querySelector('.navmobile');
const options = document.querySelector('navmobile-options');
const loader = document.querySelector('.custom-loader');

menu.addEventListener('click', () =>{
    link.setAttribute('src', 'css/change.css');
});

window.addEventListener("load", () => {
    loader.setAttribute('style', 'display:none');
    console.log("cargue");
  });

window.addEventListener("DOMContentLoaded", () => {
    loader.setAttribute('style', 'display:block');
    console.log("estoy cargando");
  });


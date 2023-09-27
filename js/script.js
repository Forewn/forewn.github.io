// script compartido por varios documentos
//configuracion de la animacion de carga asi como del menu mobile y alguna otra funcionalidad


//llamado al DOM
const loader = document.querySelector('.custom-loader');
const header = document.querySelector('.mainbar');
const footer = document.querySelector('footer');
const content = document.querySelector('main');
const menubtn = document.querySelector('.navmobile');
const options = document.querySelector('.navmobile-options');
const bgmobilenav = document.querySelector('.navmobile-options-background');
const carrousel = document.getElementById('Carrousel-Container');
const carrouselbtnleft = document.querySelectorAll('.fa-solid fa-chevron-left');
const carrouselbtnright = document.querySelectorAll('.fa-solid fa-chevron-right');

//bandera de apertura menu mobile
var openedMenu = false;

//animacion de carga
window.addEventListener('DOMContentLoaded', () => {
    loader.setAttribute('style', 'opacity:1;');
    header.setAttribute('style', 'opacity:1;');
    if(footer != null){
        footer.setAttribute('style', 'opacity:0');
    }
    content.setAttribute('style', 'opacity:0;');
    window.addEventListener('load', ()=>{
        loader.setAttribute('style', 'opacity:0;');
        header.setAttribute('style', 'opacity:1;');
        if(footer != null){
            footer.setAttribute('style', 'opacity:1');
        }
        content.setAttribute('style', 'opacity:1;');
    });
});

//apertura y cierre de menu mobile onclick
menubtn.addEventListener('click', ()=> {
    if(openedMenu){
        options.setAttribute('style', 'display:none;');
        bgmobilenav.classList.replace('navmobile-options-background-onclick', 'navmobile-options-background');
        openedMenu = false;
    }
    else{
        options.setAttribute('style', 'display:block;');
        bgmobilenav.classList.replace('navmobile-options-background', 'navmobile-options-background-onclick');
        openedMenu = true;
    }
});

//proceso paralelo a la apertura y cierre para oscurecer el fondo del menu, se separo porque
// se querian hacer dos cambios a bgmobilenav al mismo tiempo y en una misma funcion se sobre-
// escribian
bgmobilenav.addEventListener('click', () => {
    if(openedMenu){
        options.setAttribute('style', 'display:none');
        bgmobilenav.classList.replace('navmobile-options-background-onclick', 'navmobile-options-background');
        openedMenu = false;
    }
});

// este es un intento por mi parte de llevar al inicio de mi pagina el focus cuando clickeo mi
// carrusel, dado que por problemas con el menu sticky y el scrooll behavior desplaza hacia
// abajo al clickarlo
// trabajo con bucles y arrays porque en esas variables guarde varios objetos de DOM ya que
// comparten clases
for(let i = 0; i < carrouselbtnleft.length; i++){
    carrouselbtnleft[i].addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
}
// lo mismo pero para el boton derecho
for(let i = 0; i < carrouselbtnright.length; i++){
    carrouselbtnright[i].addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
}


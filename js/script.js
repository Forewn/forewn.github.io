const loader = document.querySelector('.custom-loader');
const header = document.querySelector('.mainbar');
const footer = document.querySelector('footer');
const content = document.querySelector('main');
const menubtn = document.querySelector('.navmobile');
const options = document.querySelector('.navmobile-options');
const bgmobilenav = document.querySelector('.navmobile-options-background');
const carrousel = document.getElementById('Carrousel-Container');
const carrouselbtn = document.querySelectorAll('.arrowCarrousel');

var openedMenu = false;

window.addEventListener('DOMContentLoaded', () => {
    loader.setAttribute('style', 'opacity:1;');
    header.setAttribute('style', 'opacity:1;');
    footer.setAttribute('style', 'opacity:0');
    content.setAttribute('style', 'opacity:0;');
    window.addEventListener('load', ()=>{
        loader.setAttribute('style', 'opacity:0;');
        header.setAttribute('style', 'opacity:1;');
        footer.setAttribute('style', 'opacity:1');
        content.setAttribute('style', 'opacity:1;');
    });
});

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

bgmobilenav.addEventListener('click', () => {
    if(openedMenu){
        options.setAttribute('style', 'display:none');
        bgmobilenav.classList.replace('navmobile-options-background-onclick', 'navmobile-options-background');
        openedMenu = false;
    }
});

for(let i = 0; i < carrouselbtn.length; i++){
    carrouselbtn[i].addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
}


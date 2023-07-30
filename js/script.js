const loader = document.querySelector('.custom-loader');
const header = document.querySelector('.mainbar');
const footer = document.querySelector('footer');
const content = document.querySelector('main');
const menubtn = document.querySelector('.navmobile');
const options = document.querySelector('.navmobile-options');
const bgmobilenav = document.querySelector('.navmobile-options-background');

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
        options.setAttribute('style', 'display:none');
        bgmobilenav.setAttribute('style', 'opacity:0;');
        openedMenu = false;
    }
    else{
        options.setAttribute('style', 'display:block;');
        bgmobilenav.setAttribute('style', 'opacity:1;');
        openedMenu = true;
    }
});

bgmobilenav.addEventListener('click', () => {
    options.setAttribute('style', 'display:none');
    bgmobilenav.setAttribute('style', 'opacity:0;');
    openedMenu = false;
});

const loader = document.querySelector('.custom-loader');
const header = document.querySelector('.mainbar');
const footer = document.querySelector('footer');
const content = document.querySelector('main');
const menubtn = document.querySelector('.navmobile');
const options = document.querySelector('.navmobile-options');



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
    options.setAttribute('style', 'display:block;');
});

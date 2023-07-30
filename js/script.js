window.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector('.custom-loader');
  
    loader.setAttribute('style', 'display:block');

    window.addEventListener('load', ()=>{
        loader.setAttribute('style', 'display:none;');
      })
  });
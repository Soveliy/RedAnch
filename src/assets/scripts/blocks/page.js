// page.js

// Page

const initPage = () => {

    const page = document.querySelector('.js-page');
    if (!page) return;
    
    const pageParalax = page.querySelector('.js-page__paralax');
    if (!pageParalax) return;

    const setParalaxOffset = () => {
        pageParalax.style.top = -(window.pageYOffset * 100 / (page.offsetHeight - document.documentElement.clientHeight) * document.documentElement.clientHeight / 60) +'px';
    };

    setParalaxOffset();
    window.addEventListener('scroll', setParalaxOffset);

    const resizeObserver = new ResizeObserver((entries) => {
        setParalaxOffset();
    });
    
    resizeObserver.observe(page);

};

initPage();
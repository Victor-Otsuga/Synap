const brain = document.querySelector('#model-brain');

const loading = document.querySelector('#loading');
const body = document.querySelector('body');
const frsText = document.querySelector('#first-text');

brain.addEventListener('load', () => {
    setTimeout(() => {
        loading.style.opacity = '0';
        body.classList.remove('loading');
        setTimeout(() => { 
            loading.remove();
            frsText.classList.remove('outScrenn'); 
        }, 500);
    }, 2000);

    
});
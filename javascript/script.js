let button = document.querySelector('.hiddenButton');
let splashScreen = document.querySelector ('.splashScreen')

window.addEventListener('DOMContentLoaded', () => {
    button.addEventListener('click', () => {
        console.log("¡Se presionó el botón!");
        splashScreen.classList.add('splash-screen-animation')
        
    });
});
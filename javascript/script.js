let button = document.querySelector('.hiddenButton');
let splashScreen = document.querySelector ('.splashScreen')

let rectangle = document.querySelectorAll('.rectangle')
const rectangle1 = document.querySelectorAll('.rectanglev2')
const animationContainer = document.querySelector ('.animation-container')

window.addEventListener('DOMContentLoaded', () => {
    button.addEventListener('click', () => {
        console.log("¡Se presionó el botón!");
        splashScreen.classList.add('splash-screen-animation')
        rectangle.forEach((element) => {
        element.classList.add ('animationClose')})
        rectangle1.forEach((element1) => {
        element1.classList.add ('animationClose1')})
        animationContainer.classList.add ('animationContainer')
        
    });
});
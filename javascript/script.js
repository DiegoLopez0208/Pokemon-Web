//Main Splash Screen Buttons
const button = document.querySelector('.hiddenButton');
const pokeballButton = document.querySelector('.pokeball2');
const pikachuButton = document.querySelector('.pikachu-button');
// SplashScreen
const splashScreen = document.querySelector ('.splashScreen')
//Animation Container
const rectangle = document.querySelectorAll('.rectangle')
const rectangle1 = document.querySelectorAll('.rectanglev2')
const animationContainer = document.querySelector ('.animation-container')



//Hidden Button
window.addEventListener('DOMContentLoaded', () => {
    button.addEventListener('click', () => {
        splashScreen.classList.add('splash-screen-animation')
        rectangle.forEach((element) => {
        element.classList.add ('animationClose')})
        rectangle1.forEach((element1) => {
        element1.classList.add ('animationClose1')})
        animationContainer.classList.add ('animationContainer')
        setTimeout(() => {
            splashScreen.remove()
        }, 9000);
        setTimeout(() => {
            splashScreen.classList.add ('remove')
            animationContainer.classList.add('animationClose2')
        }, 3000);
    });
});
//Pikachu Button
pikachuButton.addEventListener('click', () => {
    splashScreen.classList.add('splash-screen-animation')
    rectangle.forEach((element) => {
    element.classList.add ('animationClose')})
    rectangle1.forEach((element1) => {
    element1.classList.add ('animationClose1')})
    animationContainer.classList.add ('animationContainer')
    setTimeout(() => {
        splashScreen.classList.add ('remove')
        animationContainer.classList.add('animationClose2')
    }, 2000);
    setTimeout(() => { window.location.href = "../pages/pokedex.html";
}, 4700);
});
//Pokeball Button
pokeballButton.addEventListener('click', () => {
    splashScreen.classList.add('splash-screen-animation')
    rectangle.forEach((element) => {
    element.classList.add ('animationClose')})
    rectangle1.forEach((element1) => {
    element1.classList.add ('animationClose1')})
    animationContainer.classList.add ('animationContainer')
    setTimeout(() => {
        splashScreen.classList.add ('remove')
        animationContainer.classList.add('animationClose2')
    }, 2000);
    setTimeout(() => { window.location.href = "../pages/pokeball.html";
}, 4700);

});

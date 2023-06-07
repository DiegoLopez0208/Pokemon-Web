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


const waitFor = (ms) => {
    return new Promise(resolve => setTimeout (resolve,ms))
}
//Hidden Button
// Clarification: It was not done due to lack of time, the idea of playing a turn-based game (Pokemon Player Vs Bot Combat Style)

  //  button.addEventListener('click', () => {
    //    splashScreen.classList.add('splash-screen-animation')
      //  rectangle.forEach((element) => {
      //  element.classList.add ('animationClose')})
      //  rectangle1.forEach((element1) => {
      //  element1.classList.add ('animationClose1')})
      //  animationContainer.classList.add ('animationContainer')
       // setTimeout(() => {
        //    splashScreen.classList.add ('remove')
         //   animationContainer.classList.add('animationClose2')
       // }, 3000);
   // });
// });
window.addEventListener('DOMContentLoaded', () => {
//Pikachu Button
pikachuButton.addEventListener('click', () => {
    splashScreen.classList.add('splash-screen-animation')
    rectangle.forEach((element) => {
    element.classList.add ('animationClose')})
    rectangle1.forEach((element1) => {
    element1.classList.add ('animationClose1')})
    animationContainer.classList.add ('animationContainer')
    waitFor(2000).then(()=>{
        splashScreen.classList.add ('remove')
        animationContainer.classList.add('animationClose2')
        return waitFor(3000)
    })
    .then(()=>{
        window.location.href = "../pages/pokedex.html";
    })
});
//Pokeball Button
pokeballButton.addEventListener('click', () => {
    splashScreen.classList.add('splash-screen-animation')
    rectangle.forEach((element) => {
    element.classList.add ('animationClose')})
    rectangle1.forEach((element1) => {
    element1.classList.add ('animationClose1')})
    animationContainer.classList.add ('animationContainer')
    waitFor(2000).then(()=>{
        splashScreen.classList.add ('remove')
        animationContainer.classList.add('animationClose2')
        return waitFor(3000)
    })
    .then(()=>{
        window.location.href = "../pages/pokeball.html";
    })


});
})

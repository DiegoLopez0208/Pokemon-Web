
const navMenu = document.querySelector('#nav');

const openMenu = document.querySelector('.open-menu');

const closeMenu = document.querySelector('#close');

window.addEventListener('DOMContentLoaded', () => {

openMenu.addEventListener("click", () => {
    navMenu.classList.add("visible")
})

closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("visible")
})

})

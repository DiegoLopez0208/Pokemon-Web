window.addEventListener("DOMContentLoaded", () => {

/*Menu hamburguesa*/
  const navMenu = document.querySelector("#nav");

  const openMenu = document.querySelector(".open-menu");

  const closeMenu = document.querySelector("#close");

  openMenu.addEventListener("click", () => {
    navMenu.classList.add("visible");
  });

  closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("visible");
  });
});

const form = document.querySelector("form");

/* Declaramos los span para luego usarlos en cada value del input*/

const spanInputOne = document.getElementById("input-incorrect-one");

const spanInputTwo = document.getElementById("input-incorrect-two");

const spanInputThree = document.getElementById("input-incorrect-three");

const spanInputFour = document.getElementById("input-incorrect-four");

const spanInputFive = document.getElementById("input-incorrect-five");

const spanInputSix = document.getElementById("input-incorrect-six");

const buttonSend = document.getElementById("send")

/* Declaramos cada uno de los inputs y hacemos una expresión regular para el value de los inputs*/

const inputOne = document.getElementById("name");

const lastNameInput = document.getElementById("lastname");

const pokemonAdd = document.getElementById("pokemon-add");

const typePokemon = document.getElementById("type-pokemon");

const generationPokemon = document.getElementById("generation-pokemon");

const idPokemon = document.getElementById("id-pokemon");

const regExp = new RegExp(/[a-zA-Z]$/);

inputOne.addEventListener("input", () => {
  if(!regExp.test(inputOne.value)){

   spanInputOne.classList.remove("input-incorrect2")

  }else if(regExp.test(inputOne.value === regExp)){
    spanInputOne.classList.add('input-incorrect2')
  }
});

lastNameInput.addEventListener("input", () => {
  if(!regExp.test(lastNameInput.value)){

   spanInputTwo.classList.remove("input-incorrect2")

  }else if(regExp.test(inputOne.value === regExp)){
    spanInputTwo.classList.add('input-incorrect2')
  }
});

pokemonAdd.addEventListener("input", () => {
  if(!regExp.test(pokemonAdd.value)){

   spanInputThree.classList.remove("input-incorrect2")

  }else if(regExp.test(pokemonAdd.value === regExp)){
    spanInputThree.classList.add('input-incorrect2')
  }
});

typePokemon.addEventListener("input", () => {
  if(!regExp.test(typePokemon.value)){

   spanInputFour.classList.remove("input-incorrect2")

  }else if(regExp.test(typePokemon.value === regExp)){
    spanInputFour.classList.add('input-incorrect2')
  }
});

generationPokemon.addEventListener("input", () => {
  if(!regExp.test(generationPokemon.value)){

   spanInputFive.classList.remove("input-incorrect2")

  }else if(regExp.test(generationPokemon.value === regExp)){
    spanInputFive.classList.add('input-incorrect2')
  }
});

/* Usamos el localStorage para almacenar los datos del formulario en la web */

buttonSend.addEventListener("click", () => {

  localStorage.setItem("name", JSON.stringify(inputOne.value))

  const nameLocalStorage = JSON.parse(localStorage.getItem("name"))

  console.log(nameLocalStorage)

});

buttonSend.addEventListener("click", () => {

  localStorage.setItem("lastname", JSON.stringify(lastNameInput.value))

  const nameLocalStorage = JSON.parse(localStorage.getItem("lastname"))

  console.log(nameLocalStorage)

});

buttonSend.addEventListener("click", () => {

  localStorage.setItem("pokemonadd", JSON.stringify(pokemonAdd.value))

  const nameLocalStorage = JSON.parse(localStorage.getItem("pokemonadd"))

  console.log(nameLocalStorage)

});

buttonSend.addEventListener("click", () => {

  localStorage.setItem("typepokemon", JSON.stringify(typePokemon.value))

  const nameLocalStorage = JSON.parse(localStorage.getItem("typepokemon"))

  console.log(nameLocalStorage)

});

buttonSend.addEventListener("click", () => {

  localStorage.setItem("generationpokemon", JSON.stringify(generationPokemon.value))

  const nameLocalStorage = JSON.parse(localStorage.getItem("generationpokemon"))

  console.log(nameLocalStorage)

});

buttonSend.addEventListener("click", () => {

  localStorage.setItem("idpokemon", JSON.stringify(idPokemon.value))

  const nameLocalStorage = JSON.parse(localStorage.getItem("idpokemon"))

  console.log(nameLocalStorage)

})
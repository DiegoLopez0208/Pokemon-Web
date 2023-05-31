const navMenu = document.querySelector("#nav");

const openMenu = document.querySelector(".open-menu");

const closeMenu = document.querySelector("#close");

window.addEventListener("DOMContentLoaded", () => {
  openMenu.addEventListener("click", () => {
    navMenu.classList.add("visible");
  });

  closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("visible");
  });
});

const nameInput = document.getElementById("name");

const lastNameInput = document.querySelector(".last-name");

const pokemonAdd = document.querySelector(".pokemon-add");

const typePokemon = document.querySelector(".type-pokemon");

const generationPokemon = document.querySelector(".generation-pokemon");

const idPokemon = document.querySelector(".id-pokemon");

nameInput.oninvalid = function (event) {
  event.target.setCustomValidity(
    "Username should only contain lowercase letters. e.g. nicolas"
  );
};

window.addEventListener("DOMContentLoaded", () => {

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

const form = document.querySelector('form')

const inputIncorrect = document.getElementById("input-incorrect")

const nameInput = document.getElementById("name");

const lastNameInput = document.getElementById("last-name");

const pokemonAdd = document.getElementById("pokemon-add");

const typePokemon = document.getElementById("type-pokemon");

const generationPokemon = document.getElementById("generation-pokemon");

const idPokemon = document.getElementById("id-pokemon");

const validateInput = (name) => {
  const regExp = new RegExp(/^[a-z-A-Z\s]+$/)
  return name.length > 0 && regExp.test(name)
}

const validateIdPokemon = (name) => {
  const regExp = new RegExp(/^[0-9]+$/)
  return name.length > 0 && regExp.test(name)
}
 
nameInput.forEach((input) => {
  input.addEventListener("input", () => {
    const errorMessage = input.parentElement.querySelector("input-incorrect")
    errorMessage.classList.toggle(".input-incorrect", isValid)
  })
})

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(form)

  const name = formData.get('name')
  const lastName = formData.get('last-name')
  const addPokemon = formData.get('pokemon-add')
  const pokemonType = formData.get('type-pokemon')
  const pokemonGeneration = formData.get('generation-pokemon')
  const pokemonId = formData.get('id-pokemon')

  const newUser = {
    name,
    lastName,
    addPokemon,
    pokemonType,
    pokemonGeneration,
    pokemonId
  }

sessionStorage.setItem('user', JSON.stringify(newUser))

})
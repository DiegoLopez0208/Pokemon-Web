const hamburger = document.querySelector (".hamburger")
const navMenu = document.querySelector (".nav-menu")
hamburger.addEventListener ("click", ()=> {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=> {
navMenu.classList.remove("active")
hamburger.classList.remove("active")
}))

//Formulary Settings

const inputOne = document.getElementById("name");
const lastNameInput = document.getElementById("last-name");
const pokemonAdd = document.getElementById("pokemon-add");
const typePokemon = document.getElementById("type-pokemon");
const generationPokemon = document.getElementById("generation-pokemon");
const idPokemon = document.getElementById("id-pokemon");
const buttonSend = document.getElementById ('button-submit');
const regExp = new RegExp(/[a-zA-Z]$/);
const spanInput = document.getElementById ('input-incorrect')

inputOne.addEventListener("input", () => {
if(!regExp.test(inputOne.value)){
spanInputOne.classList.remove("input-incorrect2")
}else if(regExp.test(inputOne.value === regExp)){
    spanInput.classList.add('input-incorrect2')
}
});
lastNameInput.addEventListener("input", () => {
if(!regExp.test(lastNameInput.value)){
spanInputTwo.classList.remove("input-incorrect2")
}else if(regExp.test(inputOne.value === regExp)){
    spanInput.classList.add('input-incorrect2')
}
});
pokemonAdd.addEventListener("input", () => {
if(!regExp.test(pokemonAdd.value)){
spanInputThree.classList.remove("input-incorrect2")
}else if(regExp.test(pokemonAdd.value === regExp)){
    spanInput.classList.add('input-incorrect2')
}
});
typePokemon.addEventListener("input", () => {
if(!regExp.test(typePokemon.value)){
spanInput.classList.remove("input-incorrect2")
}
else if(regExp.test(typePokemon.value === regExp)){
    spanInput.classList.add('input-incorrect2')
}
});
generationPokemon.addEventListener("input", () => {
if(!regExp.test(generationPokemon.value)){
    spanInput.classList.remove("input-incorrect2")
}else if(regExp.test(generationPokemon.value === regExp)){
    spanInput.classList.add('input-incorrect2')
}
});
idPokemon.addEventListener("input", () => {
    if(!regExp.test(idPokemon.value)){
        spanInput.classList.remove("input-incorrect2")
    }else if(regExp.test(idPokemon.value === regExp)){
        spanInput.classList.add('input-incorrect2')
    }
    });

buttonSend.addEventListener("click", () => {
    localStorage.setItem("name", JSON.stringify(inputOne.value))
    JSON.parse(localStorage.getItem("name"))

});

buttonSend.addEventListener("click", () => {
    localStorage.setItem("lastname", JSON.stringify(lastNameInput.value))
    JSON.parse(localStorage.getItem("lastname"))

});

buttonSend.addEventListener("click", () => {
    localStorage.setItem("pokemonadd", JSON.stringify(pokemonAdd.value))
    JSON.parse(localStorage.getItem("pokemonadd"))

});

buttonSend.addEventListener("click", () => {
    localStorage.setItem("typepokemon", JSON.stringify(typePokemon.value))
    JSON.parse(localStorage.getItem("typepokemon"))
})
    

buttonSend.addEventListener("click", () => {
    localStorage.setItem("generationpokemon", JSON.stringify(generationPokemon.value))
    JSON.parse(localStorage.getItem("generationpokemon"))
    
});

buttonSend.addEventListener("click", () => {
    localStorage.setItem("idPokemon", JSON.stringify(idPokemon.value))
    JSON.parse(localStorage.getItem("idPokemon"))
    
})
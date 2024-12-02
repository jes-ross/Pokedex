const url = "https://pokeapi.co/api/v2/pokemon/"
const pokemonList = document.querySelector("#listAllPokemon")
const btnHeader = document.querySelectorAll(".btn-header")



for (let i = 1; i<= 151; i++){
    fetch(url + i)
        .then((res) => res.json())
        .then(data => showPokemon(data))
    
}




function showPokemon(poke){

    let types = poke.types.map((type) => `<p class="${type.name} type>${type.type.name}</p>`)
    types = types.join('')

    let pokeID = poke.id.toString()
    if(pokeID.length === 1){
        pokeID = "00" + pokeID
    } else if(pokeID.length === 2){
        pokeID = "0" + pokeID
    }



    const div = document.createElement("div")
    div.classList.add("pokemon")
    div.innerHTML= `
        <p class="pokemon-id-back">#${pokeID}</p>
        <div class="pokemon-img">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="container-name">
                <p class="pokemon-id">#${pokeID}</p>
                <h2 class="pokemon-name">${poke.name}</h2>
            </div>
            <div class="pokemon-types">
                ${types}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p>
                <p class="stat">${poke.weight}kg</p>
            </div>
        </div>
    `
    pokemonList.append(div)
}

btnHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const btnId = event.currentTarget.id

    pokemonList.innerHTML = ""

    for (let i = 1; i <= 151; i++) {
        fetch(url + i)
            .then((res) => res.json())
            .then(data => {
                if(btnId === "view") {
                    showPokemon(data)
                } else {
                    const types = data.types.map(type => type.type.name)
                    if (types.some(type => type.includes(btnId))) {
                        showPokemon(data)
                    }
                }

            })
    }
}))


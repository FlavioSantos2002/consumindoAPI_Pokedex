//arquivo teste.js

function retornaStringObjeto(texto, objeto) {
    return { texto, objeto };
}

function meusPokeDetails(pokemonDetails) {
    const pokemon = new Pokemon
    pokemon.name = pokemonDetails.name
    pokemon.number = pokemonDetails.id
    pokemon.types = pokemonDetails.types.map((tipos) => tipos.type.name)
    pokemon.about.height = pokemonDetails.height
    pokemon.about.weight = pokemonDetails.weight
    pokemon.about.abilities = pokemonDetails.abilities
        .map((ab) => ab.ability.name)
    pokemon.statusBase = pokemonDetails.stats


    return pokemon
}

pokeApi = {}
pokeApi.listaDePokemons = (offset = 0, limit = 10) => {

    const urlPokedex = 'https://pokeapi.co/api/v2/pokemon?offset=' + offset + '&limit=' + limit;
    return fetch(urlPokedex)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)

}

let offset = 0
let limit = 10
bt = document.getElementById('btnCarregarMais')
bt2 = document.getElementById('btnCarregarMenos')

bt.addEventListener('click', function () {

    window.document.getElementById("pokeClicado").innerHTML = ""

    bt2.disabled = false
    bt2.style.backgroundColor = '#3498db'
    offset += 10;
    if (offset >= 1020) {
        limit = 5
        offset = 1020
        bt.style.backgroundColor = 'red'
        bt.disabled = true
    }


    pokeApi.listaDePokemons(offset, limit)
        .then((pokemons) => {
            const fetchPromises = pokemons.map((element) => {
                return fetch(element.url)
                    .then((response) => response.json())
                    .then((pokemonDetails) => {

                        const texto = nomeNumeroTipos(meusPokeDetails(pokemonDetails))

                        const objeto = meusPokeDetails(pokemonDetails)
                        return retornaStringObjeto(texto, objeto)
                    });
            });

            return Promise.all(fetchPromises);
        })
        .then((pokemonDetailsList) => {
            let listaString = pokemonDetailsList.map((e)=>{
                return e.texto
            })
            let listaObj = pokemonDetailsList.map((e)=>{
                return e.objeto
            })
            let tagPokemons = document.getElementById('allPoke');
            tagPokemons.innerHTML = listaString.join('')
            cores()
            return listaObj
        })
        .then((o) => {
            let elementos = document.querySelectorAll('.poke')
            criaClick(elementos, o)
        })
        .catch((error) => {
            console.error('Erro ao carregar mais pokémons:', error);
        })
});

bt2.addEventListener('click', function () {
    window.document.getElementById("pokeClicado").innerHTML = ""
    bt.disabled = false
    offset -= 10;
    bt.style.backgroundColor = '#3498db'
    if (offset == 0) {
        bt2.style.backgroundColor = 'red'
        bt2.disabled = true
    }


    pokeApi.listaDePokemons(offset, limit)
        .then((pokemons) => {
            const fetchPromises = pokemons.map((element) => {
                return fetch(element.url)
                    .then((response) => response.json())
                    .then((pokemonDetails) => {
                        const texto = nomeNumeroTipos(meusPokeDetails(pokemonDetails))

                        const objeto = meusPokeDetails(pokemonDetails)
                        return retornaStringObjeto(texto, objeto)
                    });
            });

            return Promise.all(fetchPromises);
        })
        .then((pokemonDetailsList) => {
            let listaString = pokemonDetailsList.map((e)=>{
                return e.texto
            })
            let listaObj = pokemonDetailsList.map((e)=>{
                return e.objeto
            })
            let tagPokemons = document.getElementById('allPoke');
            tagPokemons.innerHTML = listaString.join('')
            cores()
            return listaObj
        })
        .then((o) => {
            let elementos = document.querySelectorAll('.poke')
            criaClick(elementos, o)
        })
        .catch((error) => {
            console.error('Erro ao carregar mais pokémons:', error);
        })
});





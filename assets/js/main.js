//arquivo main.js
var nomeNumeroTipos = (pokemon) => {
    let n = 3;
    if (pokemon.number >= 1000) {
        n = 4;
    }
    if (pokemon.types[1] == undefined) {
        pokemon.types[1] = ''
    }


    return '<li class = "poke"> <span class="number" >#' + pokemon.number.toString().padStart(4, '0') + '</span> <span class="name">' + pokemon.name + '</span> <div> <ol class="types"> <li class="tipo1">' + pokemon.types[0] + '</li> <li class="tipo2">' + pokemon.types[1] + '</li> </ol> <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + pokemon.number.toString().padStart(n, '0') + '.png" alt="' + pokemon.name + '"> </li>' 
};



pokeApi.listaDePokemons()
    .then((pokeList) => {
        const fetchPromises = pokeList.map((element) => {
            return fetch(element.url)
                .then((response) => response.json())
                .then((pokemonDetails) => {
                    const texto = nomeNumeroTipos(meusPokeDetails(pokemonDetails))
                    
                    const objeto = meusPokeDetails(pokemonDetails)
                    return retornaStringObjeto(texto, objeto)
                })
        })
        return Promise.all(fetchPromises);
    })
    .then((pokemonDetailsList) => {  
        let listaString = pokemonDetailsList.map((e)=>{
            return e.texto
        })
        let listaObj = pokemonDetailsList.map((e)=>{
            return e.objeto
        })
        bt2.disabled = true
        bt2.style.backgroundColor = 'red'
        let tagPokemons = document.getElementById('allPoke');
        tagPokemons.innerHTML = listaString.join('')
        cores()
        return listaObj
    })
    .then((o)=>{
        let elementos = document.querySelectorAll('.poke')
        criaClick(elementos, o)
    })
    .catch((error) => console.error('Erro ao buscar dados:', error))


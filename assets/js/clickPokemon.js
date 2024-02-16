function criaClick(elementos, objeto) {
    elementos.forEach((element, index) => {
        element.addEventListener('click', function () {
            let teste = window.document.getElementById("pokeClicado")
            let objPokeClicado = objeto[index]
            console.log(objPokeClicado);
            teste.innerHTML = retornaTxtHtml(objPokeClicado)

            let botaoSair = window.document.getElementById('saida')

            botaoSair.addEventListener('click', ()=>{
                teste.innerHTML = ""
            })


        })
    })
}

function retornaTxtHtml(obj) {
    let n = 3;
    if (obj.number >= 1000) {
        n = 4;
    }

    return '<button id="saida">SAIR</button> <div id="pokeImg">       <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+obj.number.toString().padStart(n, '0')+'.png" alt="imagem"> <div class = "centro">    <ol id="about">   <li>TIPO: '+ obj.types[0] +'</li>      <li>Altura: '+ obj.about.height/10 +'m</li>         <li>Peso: '+obj.about.weight/10+'kg</li>         <li>habilidade 1 : '+obj.about.abilities[0]    +'</li>         <li>habilidade 2 : '+obj.about.abilities[1] +'</li>         <li>habilidade 3 : '+obj.about.abilities[2]  +'</li>         <li>HP: '+obj.statusBase[0].base_stat+'</li>         <li>ATAQUE: '+obj.statusBase[1].base_stat+'</li>         <li>DEFESA: '+obj.statusBase[2].base_stat+'</li>              <li>ATAQUE-E: '+obj.statusBase[3].base_stat+'</li>         <li>DEFESA-E: '+obj.statusBase[4].base_stat+'</li>         <li>VELOCIADADE: '+obj.statusBase[5].base_stat+'</li>     </ol> </div>'
}


//arquivo coresPokeTypes.js

let cores = () => {
    var palavra = document.querySelectorAll('.pokemons li div ol.types li:first-child');
    palavra.forEach(function (elemento) {
        const coresPorTipo = {
            water: "#9afa",        // Light Blue
            fire: "#FFA07A",         // Light Salmon
            grass: "#8FBC8F",        // Dark Sea Green
            electric: "#e5d352",     // Gold
            ice: "#87CEEB",          // Sky Blue
            fighting: "#D2691E",      // Chocolate
            poison: "#800080",        // Purple
            ground: "#DEB887",       // Burlywood
            flying: "#87CEEB",        // Sky Blue
            psychic: "#FF69B4",       // Hot Pink
            bug: "#008148",           // Lime Green
            rock: "#A9A9A9",          // Dark Gray
            ghost: "#8B008B",         // Dark Magenta
            dark: "#2E282A",          // Black
            steel: "#A9A9A9",         // Dark Gray
            fairy: "#FFB6C1",         // Light Pink
            dragon: "#4169E1",        // Royal Blue
            normal: "#A9A9A9"
        };

        elemento.parentElement.parentElement.parentElement.style.backgroundColor = coresPorTipo[elemento.textContent.trim()];    
    });

    var elementos = document.querySelectorAll('.pokemons li div ol.types li');

    elementos.forEach(function (elemento) {
        const coresPorTipo = {
            water: "#aaaa",        // Light Blue
            fire: "#FFA07A",         // Light Salmon
            grass: "#8FBC8F",        // Dark Sea Green
            electric: "#e5d352",     // Gold
            ice: "#87CEEB",          // Sky Blue
            fighting: "#D2691E",      // Chocolate
            poison: "#800080",        // Purple
            ground: "#DEB887",       // Burlywood
            flying: "#87CEEB",        // Sky Blue
            psychic: "#FF69B4",       // Hot Pink
            bug: "#008148",           // Lime Green
            rock: "#A9A9A9",          // Dark Gray
            ghost: "#8B008B",         // Dark Magenta
            dark: "#2E282A",          // Black
            steel: "#A9A9A9",         // Dark Gray
            fairy: "#FFB6C1",         // Light Pink
            dragon: "#4169E1",        // Royal Blue
            normal: "#A9A9A9"
        };

        const tipo = elemento.textContent.trim();
        
        // Aplica a cor ao próprio elemento <li>
        elemento.style.backgroundColor = coresPorTipo[tipo];
    });


    


}
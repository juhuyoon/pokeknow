var pokemonInputBox = document.getElementById('pokemon-finder');
var pokemonButton = document.getElementById('search-btn');
var pokemonBox = document.getElementById('pokemon-box');
// console.log(pokemonInputBox);

pokemonButton.addEventListener('click', function(event) {
    event.preventDefault();
    // console.log(pokemonInputBox.value);
    var userChoice = pokemonInputBox.value.toLowerCase();
    getPokemonData(userChoice);
    console.log("hi");
})

function getPokemonData(pokemonName) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data.name);

        var cardEl = document.createElement('div');
        cardEl.setAttribute("class", "card col-md-3");
        cardEl.setAttribute("style", "width: 20rem")
        cardEl.textContent = data.name;
        for(var i = 0; i < data.moves.length; i++) {
            var moveNames = document.createElement('div');
            moveNames.textContent = data.moves[i].move.name;
            console.log(moveNames);
            cardEl.appendChild(moveNames);
        }
        pokemonBox.appendChild(cardEl);
    })
}
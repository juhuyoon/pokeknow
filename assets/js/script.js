var pokemonInputBox = document.getElementById('pokemon-finder');

var pokemonButton = document.getElementById('search-btn');

console.log(pokemonInputBox);

pokemonButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(pokemonInputBox.value);
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data.name);
        console.log(data.abilities)
    })
    console.log("hi");
})
let pokList = document.getElementById('selectpok');
let card = document.getElementById('card');

async function fetchingPokApi() {
    let pokemons = await fetch('https://pokeapi.co/api/v2/pokemon');
    let data = await pokemons.json();
    console.log(data);
    data = data.results;
    console.log(data);
    data.map((pok) => {
        pokList.innerHTML += `  <option value="${pok.name}">${pok.name}</option>`
    });
}
fetchingPokApi();

pokList.addEventListener('change', async function () {
    let pokemon = pokList.value;
    let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let data = await pokemons.json();
    // console.log(data.moves[0].move);
    card.innerHTML = ''
    card.innerHTML += `
    <div class="card-body">
                <img src="${data.sprites.front_default}"
                    alt="" width="200">
                <h2>Name: <span>${data.name}</span></h2>
            </div>
            <ol id="abilityList">
            <b>TOP MOVES</b>
             ${data.moves.splice(0, 10).map((pokMoves) => `<li>${pokMoves.move.name}</li>`).join('')}
            </ol >
        `;


});
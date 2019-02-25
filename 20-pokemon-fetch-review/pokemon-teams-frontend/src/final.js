const BASE_URL = 'http://localhost:3000';
const TRAINERS_URL = `${BASE_URL}/trainers`;
const POKEMONS_URL = `${BASE_URL}/pokemons`;

// get data from our API
function getTrainers() {
  return fetch(TRAINERS_URL)
  .then(res => res.json())
}

function createPokemon(trainerId) {
  return fetch(POKEMONS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      trainer_id: trainerId
    })
  })
  .then(res => res.json())
}

function releasePokemon(pokemonId) {
  return fetch(`${POKEMONS_URL}/${pokemonId}`, {
    method: 'DELETE',
  })
  .then(res => res.json())
}

// create the DOM elements we want to add
function createTrainerCard(trainerData) {

  const div = document.createElement('div');
  div.classList.add('card');
  div.dataset.id = trainerData.id;

  const p = document.createElement('p');
  p.innerText = trainerData.name;

  const button = document.createElement('button');
  button.dataset.trainerId = trainerData.id;
  button.innerText = 'Add Pokemon';
  button.addEventListener('click', handleAddPokemon);

  const ul = document.createElement('ul');

  trainerData.pokemons.forEach(function(pokemonData){
    const pokemonLi = createPokemonLi(pokemonData);
    ul.append(pokemonLi);
  });

  div.append(p, button, ul);

  return div;
}

function createPokemonLi(pokemonData) {
  const li = document.createElement('li');
  const pokemonName = `${pokemonData.nickname} (${pokemonData.species}) `;
  li.innerText = pokemonName;
  const button = document.createElement('button');
  button.classList.add('release');
  button.dataset.pokemonId = pokemonData.id;
  button.innerText = 'Release';
  button.addEventListener('click', handleReleasePokemon);
  li.append(button);
  return li;
}


// create event listners to the elements we want interactivity on
function handleAddPokemon(event) {
  const trainerDiv = event.target.parentNode;
  const pokemonsUl = trainerDiv.querySelector('ul');
  const trainerId = parseInt(event.target.dataset.trainerId);
  createPokemon(trainerId).then(function(pokemonData) {
    const pokemonLi = createPokemonLi(pokemonData);
    // if (pokemonsUl.childElementCount() <= 5) {
    if(!pokemonData.error){
      pokemonsUl.append(pokemonLi);
    }
  })
}

function handleReleasePokemon(event) {
  const pokemonLi = event.target.parentNode;
  const pokemonId = parseInt(event.target.dataset.pokemonId);
  pokemonLi.remove()
  releasePokemon(pokemonId)
}


// find the DOM element we want to attach our trainers to
const pokemonContainer = document.querySelector('main');


// create our initial DOM elements from the data that our API returns
getTrainers().then(function(trainersData) {
  trainersData.forEach(function(trainerData) {
    const trainerCard = createTrainerCard(trainerData);
    pokemonContainer.append(trainerCard);
  })
})

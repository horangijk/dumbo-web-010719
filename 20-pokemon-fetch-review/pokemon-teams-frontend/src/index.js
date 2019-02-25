const BASE_URL = 'http://localhost:3000';
const TRAINERS_URL = `${BASE_URL}/trainers`;
const POKEMONS_URL = `${BASE_URL}/pokemons`;

// get data from our API
function getTrainers() {
  return fetch(TRAINERS_URL).then(response => response.json())
}
// how to use:
// getTrainers(11).then(trainers => {
//   console.log(trainers)
// })

function createPokemon(trainerId) {
  return fetch(POKEMONS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ trainer_id: trainerId })
  }).then(response => response.json())
}
// how to use:
// createPokemon(11).then(pokemon => {
//   console.log(pokemon)
// })

function deletePokemon(pokemonId) {
  return fetch(`${POKEMONS_URL}/${pokemonId}`, {
    method: 'DELETE'
  }).then(response => response.json())
}
// how to use:
// deletePokemon(140).then(pokemon => {
//   console.log(pokemon)
// })


// create HTML elements
function createTrainerCard(trainerData) {
  const trainerDivContainer = document.createElement('div');
  trainerDivContainer.classList.add('card')
  trainerDivContainer.dataset.id = trainerData.id;

  const trainerNameTag = document.createElement('p');
  trainerNameTag.innerText = trainerData.name;

  const addPokemonButton = document.createElement('button');
  addPokemonButton.innerText = 'Add Pokemon';
  addPokemonButton.dataset.trainerId = trainerData.id
  addPokemonButton.addEventListener('click', handleAddPokemon)

  const pokemonListUl = document.createElement('ul');

  trainerData.pokemons.forEach(function(pokemon) {
    const pokemonLi = createPokemonLi(pokemon);
    pokemonListUl.append(pokemonLi);
  })

  trainerDivContainer.append(trainerNameTag, addPokemonButton, pokemonListUl)

  return trainerDivContainer
  // this trainerDivContainer looks like this now:
  // <div class="card" data-id="1"><p>Prince</p>
  //   <button data-trainer-id="1">Add Pokemon</button>
  //   <ul>
  //     <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
  //     <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
  //     <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
  //     <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
  //     <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  //   </ul>
  // </div>

}

function createPokemonLi(pokemonData) {
  const pokemonLi = document.createElement('li');
  pokemonLi.innerText = `${pokemonData.nickname} (${pokemonData.species}) `

  const releasePokemonButton = document.createElement('button');
  releasePokemonButton.innerText = 'Release';
  releasePokemonButton.classList.add('release');
  releasePokemonButton.dataset.pokemonId = pokemonData.id;
  releasePokemonButton.addEventListener('click', handleReleasePokemon);

  pokemonLi.append(releasePokemonButton);

  return pokemonLi;
  // this pokemonLi looks like this now:
  // <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </div>
}


// create event listeners for interactivity
function handleAddPokemon(event) {
  // grab the trainer id
  const trainerId = event.target.dataset.trainerId;
  // find this trainer's pokemon
  const pokemonsUl = event.target.parentElement.querySelector('ul');
  // check if we can add more pokemon to this trainer
  if (pokemonsUl.childElementCount <= 5) {
    // send it to our api to get back a new pokemon
    createPokemon(trainerId).then(pokemon => {
      // create a pokemonLi
      const pokemonLi = createPokemonLi(pokemon);
      // add that pokemon to this trainer's ul HTML
      pokemonsUl.append(pokemonLi);
    })
  }
}

function handleReleasePokemon(event) {
  // grab the pokemon id
  const pokemonId = event.target.dataset.pokemonId;
  // send it as a DELETE /pokemons/:id to our api
  deletePokemon(pokemonId);
  // remove this pokemon from the DOM
  const pokemonLi = event.target.parentElement
  pokemonLi.remove();

}


// find the DOM element we want to attach our new HTML to
const appContainer = document.querySelector('main');


// hook everything together
getTrainers().then(trainers => {
  trainers.forEach(function(trainer) {
    const trainerCard = createTrainerCard(trainer)
    appContainer.append(trainerCard);
  })
})

// I want to make a fetch request
// to load all of the beers
// GET "http://localhost:3000/beers"

Adapter.getAllBeers()
.then((data) => {
  let beers = data.map(beer => {
    // Before Destructuring
    // let beerObj = new Beer(beer.id, beer.name, beer.tagline, beer.description, beer.image_url)
    // After Destructuring
    let beerObj = new Beer(beer)
    return beerObj
  })

  // Find the place to add the text to the page
  // for each instance of a beer, tell it to render
  let listGroup = document.getElementById('list-group')

  beers.forEach(beer => {
      listGroup.innerHTML += beer.render()
  })
})


let listGroup = document.getElementById('list-group')
listGroup.addEventListener('click', (event) => {
  if(event.target.tagName === "LI"){
    let foundBeer = Beer.all.find(beer => beer.id === +event.target.dataset.id)
    let beerDetail = document.getElementById('beer-detail')

    beerDetail.innerHTML = foundBeer.renderDetails()

  }
})


let beerDetail = document.getElementById('beer-detail')
beerDetail.addEventListener('click', saveBeer)


function saveBeer(event){
  if(event.target.tagName === "BUTTON"){
    // Update the page
    // Update the "backend"

    // <li data-beer-id="test">
    // event.target.dataset.beerId
    const foundBeer = Beer.all.find(beer=> beer.id === +event.target.dataset.id)
    const textValue = document.querySelector('textarea').value
    foundBeer.description = textValue
    Adapter.patchBeer(foundBeer)


  }
}

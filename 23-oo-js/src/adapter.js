class Adapter {
  static getAllBeers(){
    return fetch("http://localhost:3000/beers")
    .then(res => res.json())
  }

  static patchBeer(foundBeer){
    return fetch("http://localhost:3000/beers/" + foundBeer.id, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: foundBeer.description
      })
    })
    .then(res => res.json())
  }
}

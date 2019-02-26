
// DELIVERABLES:
// 1) When we click Add Taco button, we want to add a taco to the list
// - A taco consists of an li element with a p element inside it

// 2) When we click a taco, we want to remove the taco from the list

// Oh look, a helper method!
function generateTaco(){
  const p = document.createElement('p')

  p.className = 'taco'
  p.innerText = '🌮'

  return p
}

// This is a hint:
function generateLiElement(){

}

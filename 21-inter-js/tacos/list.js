// When I click on the add taco button, I should add a taco
const addTaco = document.querySelector('button')
const ulElement = document.querySelector('#main-list')
addTaco.addEventListener('click', function(event){
  ulElement.append(generateLiElement())
})

ulElement.addEventListener('click', handleClick)



// DELIVERABLES:
// 1) When we click Add Taco button, we want to add a taco to the list
// - A taco consists of an li element with a p element inside it

// 2) When we click a taco, we want to remove the taco from the list

// Oh look, a helper method!
// function generateTaco(){
//   const p = document.createElement('p')
//
//   p.className = 'taco'
//   p.innerText = '🌮'
//
//   return p
// }

const generateTaco = () => {
  const p = document.createElement('p')

  p.className = 'taco'
  p.innerText = '🌮'

  return p
}

// This is a hint:
function generateLiElement(){
 // <li><p></p></li>
 // 1. Create an element - li
 const liElement = document.createElement('li')
 // 2. I need to also create the paragraph tag (generateTaco)
 const taco = generateTaco()
 // 3. I need to combine the li and the paragraph tags
 liElement.append(taco)

 return liElement
}

// 4. I need to put it on the page
// We found the element
// We should do... append the li



// Removing a taco
// 0. Find the UL
// 1. Adding an event listener to the container (ul)
// 2. Delete the target






function handleClick(event) {
  if(event.target.className === "taco"){
    console.log('We got the taco')
    event.target.parentElement.remove()

  } else {
    console.log('This ain\'t no taco')
  }
}












///

// console.log('it is attached')

// The keyword 'this'
// Execution context
// console.log(this) // "Window" object

// Scenario 1: `this` gets AUTOMATICALLY bound to the class/instance
class Dog {
  constructor(){
    console.log(this) // the object in question
    // when dealing with OOP in JS
  }

  static whoAreYou(){
    console.log('The value of \`this\` is:' + this)
  }
}


// Scenario 2: Functions

function saySomethingCool() {
  console.log('This is inside of:')
  // console.log(this)
  return this
}

let cat = {
  name: "Whiskers",
  speak: saySomethingCool
}


// Scenario 3: Arrow Functions

// let saySomethingCool = () => {
//   console.log('This is inside of:')
//   console.log(this)
// }
//
// let cat = {
//   name: "Whiskers",
//   speak: saySomethingCool
// }

// Scenario 4: bind/call/apply


// function saySomethingCool(arg1, arg2) {
//   console.log('This is inside of:')
//   console.log(this)
// }
//
// let betterBoundFunction = saySomethingCool.bind(this)

// call
// saySomethingCool.call(this, arg1, arg2)

// apply
// saySoemthingCool.apply(this, [arg1, arg2])

//
// let cat = {
//   name: "Whiskers",
//   speak: betterBoundFunction
// }







///

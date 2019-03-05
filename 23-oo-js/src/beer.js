class Beer {
    constructor({id, name, tagline, description, image_url}){
      // const {id, name, tagline, description, image_url} = beer
      this.name = name
      // Beer {name: "Dogfish"}
      this.tagline = tagline
      // Beer {name: "Dogfish", tagline: "Wow what a name"}
      this.description = description
      this.id = id
      this.image_url = image_url

      Beer.all.push(this)
    }

    render(){
      // return HTML string
      return `<li data-id=${this.id} class="list-group-item">${this.name}</li>`
    }

    renderDetails(){
      return `<h1>${this.name}</h1>
      <img src="${this.image_url}">
      <h3>${this.tagline}</h3>
      <textarea>${this.description}</textarea>
      <button data-id=${this.id} id="edit-beer" class="btn btn-info">
        Save
      </button>`
    }

    // What type of method? Instance or Class?
    //  Instance method -- you need an instance to call this
    // saySomething(){
    //   return `${this.name} has a tagline of: ${this.tagline}`
    // }
    //
    // // Class Method
    // static definition(){
    //   return 'A beer is an alcoholic beverage'
    // }
}


Beer.all = []













// new Beer("Dogfish", "Wow what a name")


// class Beer

//   @@all = []
//   def initialize(name, tagline, ...)
//     @name = name
//     @tagline = tagline
//     @@all << self
//   end
// end
//
// Beer.new("Dogfish", "Wow what a name")

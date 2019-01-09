require "pry"

class Dancer
  # Method -> Function relating to a object/class
  def initialize(name, style, music_genre)
    # Instance variables
    # ===========
    # Remembers the value throughout the "instance"
    # of the class (aka. an object)
    @name = name
    @style = style
    @music_genre = music_genre
  end

  # Class Methods
  # =========
  # - Self outside of an instance method
  # Or just "inside the class" is referring to the class
  # - Reads like: def Dancer.hello_world
  def self.hello_world(person)
    "Welcome to the Flatiron School Dance Studio, #{person.name}"
  end

  # Instance Method
  # =========
  # It can only be called on an instance of this class
  # "Instance of this class " === "an object of this class"
  # Ex: prince.name
  def name
    # I want to return the value that the instance 
    # variable "name" equals
    @name
  end

  def style
    @style
  end

  def music_genre
    @music_genre
  end

  def dances
    # Prince dances to Crazy Rock
    # Mariel dances to Classical
    "#{self.name} dances to #{@music_genre}"

    # Why we can eliminate self and it runs the instance method???
    # ======
    # 1. Does this exist as a variable? Return that value
    # 2. If it doesn't, does a method by this name exist? Return the method value
    # 3. Break the code
  end

  # An instance method that takes in another instance
  def talks(person)
    # "Prince talks to Mariel"
    "#{self.name} talks to #{person.name}"
  end
end


# "Dancer" -> Referencing the class
# puts Dancer

# # Creating a new object
prince = Dancer.new("Prince", "Wild", "Crazy Rock")
# mariel = Dancer.new("Mariel", "Hip Hop", "Classical")

# puts prince.talks(mariel)
# puts mariel.talks(prince)

puts Dancer.hello_world(prince)
# puts prince.hello_world # Doesn't work because hello_world is a class method
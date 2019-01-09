class Dancer
  def initialize(name, style, music_genre)
    @name = name
    @style = style
    @music_genre = music_genre
  end

  def self.hello_world(person)
    "Welcome to the Flatiron School Dance Studio, #{person.name}"
  end

  def name
    @name
  end

  def style
    @style
  end

  def music_genre
    @music_genre
  end

  def dances
    "#{self.name} dances to #{@music_genre}"
  end

  def talks(person)
    "#{self.name} talks to #{person.name}"
  end
end








class Performance
  def initialize(name, location)
    @name = name
    @location = location
  end

  def name
    @name
  end

  def location
    @location
  end
end

# - A `Trip` belongs to a listing and a guest
#   - It will also be initialized with a guest, listing, and a duration of the trip

class Trip

  attr_reader :guest, :listing
  attr_accessor :duration

  @@all = []

  def initialize(guest, listing, duration)
    @guest = guest # <#Guest:....>
    @listing = listing# <#Listing:...>
    @duration = duration# string /*number*
    @@all << self
  end

  def self.all
    @@all
  end
end

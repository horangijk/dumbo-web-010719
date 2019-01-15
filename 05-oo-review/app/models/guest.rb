# - A `Guest` has many trips
#   - A guest is initialized with a name. It cannot be changed after it is initialized

# - `Guest#listings`
#   - Returns an array of all Listing instances a guest has stayed at
# - `Guest#trips`
#   - Returns an array of all Trip instances a guest has taken
# - `Guest#trip_count`
#   - Returns the number of trips a Guest has taken
# - `Guest.all`
#   - Returns an array of all Guest instances
# - `Guest.pro_traveler`
#   - Returns an array of all Guest instances who have made over 1 trip
# - `Guest.find_all_by_name`
#   - Takes an argument of a guest's name (as a string), returns an array of Guest instances with that name

class Guest
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def listings
    # Find all the trips that this guest has been on
    # each trip in our array belongs to this guest
    self.trips.map do |trip|
      trip.listing
    end
  end

  def trips
    Trip.all.select do |trip|
      self == trip.guest
    end
  end

  def trip_count
    trips.count
  end

  def self.pro_traveler
      Guest.all.select do |guest|
        guest.trip_count > 1
      end
  end

  def self.find_all_by_name(name)
    Guest.all.select do |guest|
      guest.name == name
    end
  end


  def self.all
    @@all
  end

end

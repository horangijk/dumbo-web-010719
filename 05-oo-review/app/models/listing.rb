# - A `Listing` (i.e. a house or apartment) has many trips
#   - A listing has a city attribute which is a string of a city name, e.g. 'Seattle'
#   - It cannot be changed after it is initialized

class Listing

  attr_reader :city

  @@all = []

  def initialize(city_name)
    @city = city_name

    @@all << self
  end

  def self.all
    @@all
  end

  def trips
    # Find all the trips made to this listing?
    # 1) Find all the trips ever made: Trip.all
    # 2) Only care about the ones that are at my listing
    # 3) Return as an array of Trips

    Trip.all.select do |trip|
      trip.listing == self
    end
  end

  def guests
    # Find all the guests that have STAYED at THIS listing
    # Expected: [#<Guest>]
    # 1. Find all the trips that this listing has
    # 2. Return back all the guests from those trips
    trips.map do |trip|
      trip.guest
    end
  end

  def trip_count
    # Number of trips made to this listing
    self.trips.count
    # self.trips.length
    # self.trips.size
  end

  def self.most_popular
    # Finding the one with the highest trip count
    # Find the max by a certain condition
    Listing.all.max_by do |listing|
      listing.trip_count
    end
  end

  def self.find_all_by_city(city_name)
    Listing.all.select do |listing|
      listing.city == city_name
    end
  end








end

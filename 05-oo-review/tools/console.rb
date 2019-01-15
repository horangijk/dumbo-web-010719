require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end


atlanta = Listing.new("Atlanta, GA")
seattle = Listing.new("Seattle, WA")

guest1 = Guest.new("Prince")
guest2 = Guest.new("Helen")

trip1 = Trip.new(guest1, atlanta, 1)
trip2 = Trip.new(guest2, atlanta, 1.5)
trip3 = Trip.new(guest1, seattle, 7*24)


# Put your variables here~!
binding.pry

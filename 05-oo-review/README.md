# Airbnb Relationship Practice

## Deliverables
You are building an app for an Airbnb competitor
- Your domain includes the models `Listing`, `Trip`, and `Guest`
  - A `Listing` (i.e. a house or apartment) has many trips
    - A listing has a city attribute which is a string of a city name, e.g. 'Seattle'
    - It cannot be changed after it is initialized
  - A `Guest` has many trips
    - A guest is initialized with a name. It cannot be changed after it is initialized
  - A `Trip` belongs to a listing and a guest
    - It will also be initialized with a guest, listing, and a duration of the trip

As always, begin with making sure to draw out the relationships and understand the domain. Then,
below you will find the methods that we'd expect for you to complete. They are grouped by class,
they are not ordered in any particular way beyond that.  

#### Listing
<!-- - `Listing#guests`
  - Returns an array of all Guest instances who have stayed at a listing
- `Listing#trips`
  - Returns an array of all Trip instances at a listing -->
<!-- - `Listing#trip_count`
  - Returns the number of trips that have been taken to that listing -->
<!-- - `Listing.all`
  - Returns an array of all Listing instances that have been created
- `Listing.find_all_by_city`
  - Takes an argument of a city name (as a string) and returns an array of all Listing instances for that city -->
<!-- - `Listing.most_popular`
  - Finds the listing that has had the most trips -->

#### Guest
- `Guest#listings`
  - Returns an array of all Listing instances a guest has stayed at
- `Guest#trips`
  - Returns an array of all Trip instances a guest has taken
- `Guest#trip_count`
  - Returns the number of trips a Guest has taken
- `Guest.all`
  - Returns an array of all Guest instances
- `Guest.pro_traveler`
  - Returns an array of all Guest instances who have made over 1 trip
- `Guest.find_all_by_name`
  - Takes an argument of a guest's name (as a string), returns an array of Guest instances with that name

#### Trip
<!-- - `Trip#listing`
  - Returns the Listing object for the trip
- `Trip#guest`
  - Returns the Guest object for the trip
- `Trip.all`
  - Returns an array of all Trips created -->

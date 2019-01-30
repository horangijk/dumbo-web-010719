class Film < ActiveRecord::Base

  # Look at the columns and make attribute accessors
  belongs_to :director
  # Build me a method called director and find
  # the director object based off of the director_id
end

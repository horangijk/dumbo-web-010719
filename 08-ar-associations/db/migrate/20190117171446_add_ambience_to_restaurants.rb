class AddAmbienceToRestaurants < ActiveRecord::Migration[5.2]
  def change
    # Add a Column to Restaurants called Ambience which is a string
    add_column :restaurants, :ambience, :string
  end
end

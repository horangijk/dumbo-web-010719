class AddClosedToRestaurants < ActiveRecord::Migration[5.2]
  def change
    # add_column :restaurants, :closed, :boolean
    add_column :restaurants, :closed, :boolean, default: false
  end
end

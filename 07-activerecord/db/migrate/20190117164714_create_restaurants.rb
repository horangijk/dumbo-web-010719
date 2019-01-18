class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    # Describe the changes you want to do to the database
    # when you perform this migration
    create_table :restaurants do |t|
      # name, cuisine, location
      # t.DATA_TYPE :column_name
      t.string :name
      t.string :cuisine
      t.string :location
    end

    # CREATE TABLE restaurants (name TEXT, cuisine TEXT, location TEXT);
  end

  # def up
  # end
  # def down
  # end
end

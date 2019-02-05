class CreateCarOwners < ActiveRecord::Migration[5.2]
  def change
    create_table :car_owners do |t|
      t.integer :car_id
      t.integer :owner_id
      t.integer :years_held

      t.timestamps
    end
  end
end

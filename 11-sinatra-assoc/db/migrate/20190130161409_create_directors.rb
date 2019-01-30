class CreateDirectors < ActiveRecord::Migration[5.2]
  def change
    create_table :directors do |t|
      # Describing the columns
      t.string :name
      t.integer :age
      t.string :style
    end
  end
end

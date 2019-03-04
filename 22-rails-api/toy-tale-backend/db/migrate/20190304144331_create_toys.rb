class CreateToys < ActiveRecord::Migration[5.2]
  def change
    create_table :toys do |t|
      # name, image, likes
      t.string :name
      t.string :image
      t.integer :likes, default: 0
      t.timestamps
    end
  end
end

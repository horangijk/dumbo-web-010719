class AddCheckedOutToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :checked_out, :boolean
  end
end

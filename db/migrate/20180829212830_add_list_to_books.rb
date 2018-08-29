class AddListToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :list, :string
  end
end

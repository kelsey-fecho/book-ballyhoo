class AddUrlToBookTable < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :url, :string
  end
end

class AddTypeToProduct < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :group, :string, null: false
  end
end

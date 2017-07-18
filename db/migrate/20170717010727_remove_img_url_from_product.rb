class RemoveImgUrlFromProduct < ActiveRecord::Migration[5.1]
  def change
    remove_column :products, :img_url, :string
  end
end

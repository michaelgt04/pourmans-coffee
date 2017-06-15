class CreateAbout < ActiveRecord::Migration[5.1]
  def change
    create_table :abouts do |t|
      t.text :blurb, null: false
    end
  end
end
